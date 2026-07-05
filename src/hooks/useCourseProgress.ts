import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import type { VocabEntry } from "@/data/course";
import { WEEKS } from "@/data/course";

const STORAGE_KEY = "medical-arabic-course-v1";

export interface CourseProgress {
  completedCheckpoints: string[];
  checkpointScores: Record<string, { score: number; timestamp: number }>;
  assignments: Record<string, { answers: string; submitted: boolean; selfScore?: string }>;
  notes: Record<string, string>;
  vocabBank: VocabEntry[];
}

const EMPTY: CourseProgress = {
  completedCheckpoints: [],
  checkpointScores: {},
  assignments: {},
  notes: {},
  vocabBank: [],
};

function load(): CourseProgress {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<CourseProgress>;
    return {
      completedCheckpoints: parsed.completedCheckpoints ?? [],
      checkpointScores: parsed.checkpointScores ?? {},
      assignments: parsed.assignments ?? {},
      notes: parsed.notes ?? {},
      vocabBank: parsed.vocabBank ?? [],
    };
  } catch {
    return EMPTY;
  }
}

export function useCourseProgress() {
  const [progress, setProgress] = useState<CourseProgress>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(load());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* ignore quota errors */
    }
  }, [progress, hydrated]);

  const toggleCheckpoint = useCallback((id: string) => {
    setProgress((p) => ({
      ...p,
      completedCheckpoints: p.completedCheckpoints.includes(id)
        ? p.completedCheckpoints.filter((c) => c !== id)
        : [...p.completedCheckpoints, id],
    }));
  }, []);

  const setCheckpointScore = useCallback((id: string, score: number) => {
    setProgress((p) => ({
      ...p,
      checkpointScores: {
        ...p.checkpointScores,
        [id]: { score, timestamp: Date.now() },
      },
    }));
  }, []);

  const setAssignment = useCallback(
    (weekId: string, patch: Partial<{ answers: string; submitted: boolean; selfScore?: string }>) => {
      setProgress((p) => {
        const prev = p.assignments[weekId] ?? { answers: "", submitted: false };
        return {
          ...p,
          assignments: { ...p.assignments, [weekId]: { ...prev, ...patch } },
        };
      });
    },
    [],
  );

  const setNote = useCallback((weekId: string, value: string) => {
    setProgress((p) => ({ ...p, notes: { ...p.notes, [weekId]: value } }));
  }, []);

  const addVocab = useCallback((entry: Omit<VocabEntry, "id">) => {
    setProgress((p) => {
      // Check for duplicates
      const isDuplicate = p.vocabBank.some(
        (v) => v.arabic === entry.arabic && v.transliteration === entry.transliteration
      );

      if (isDuplicate) {
        toast.info("Term already in Vocabulary Bank");
        return p;
      }

      toast.success("Added to Vocabulary Bank");
      return {
        ...p,
        vocabBank: [
          ...p.vocabBank,
          { ...entry, id: `v-${Date.now()}-${Math.random().toString(36).slice(2, 7)}` },
        ],
      };
    });
  }, []);

  const removeVocab = useCallback((id: string) => {
    setProgress((p) => ({ ...p, vocabBank: p.vocabBank.filter((v) => v.id !== id) }));
  }, []);

  const updateVocab = useCallback((id: string, patch: Partial<VocabEntry>) => {
    setProgress((p) => ({
      ...p,
      vocabBank: p.vocabBank.map((v) => (v.id === id ? { ...v, ...patch } : v)),
    }));
  }, []);

  const exportProgress = useCallback(() => {
    try {
      const dataStr = JSON.stringify(progress, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      
      const exportFileDefaultName = `medical-arabic-progress-${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", url);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();
      URL.revokeObjectURL(url);
      
      toast.success("Progress exported successfully");
    } catch (e) {
      toast.error("Failed to export progress");
    }
  }, [progress]);

  const importProgress = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;
        const parsed = JSON.parse(result) as Partial<CourseProgress>;
        
        // Basic validation
        if (typeof parsed !== "object" || parsed === null) {
          throw new Error("Invalid format");
        }
        
        setProgress({
          completedCheckpoints: Array.isArray(parsed.completedCheckpoints) ? parsed.completedCheckpoints : [],
          checkpointScores: typeof parsed.checkpointScores === "object" ? parsed.checkpointScores : {},
          assignments: typeof parsed.assignments === "object" ? parsed.assignments : {},
          notes: typeof parsed.notes === "object" ? parsed.notes : {},
          vocabBank: Array.isArray(parsed.vocabBank) ? parsed.vocabBank : [],
        });
        
        toast.success("Progress imported successfully");
      } catch (err) {
        console.error(err);
        toast.error("Invalid backup file. Could not import progress.");
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read the file.");
    };
    reader.readAsText(file);
  }, []);

  const calculateWeekProgress = useCallback((weekId: string) => {
    const week = WEEKS.find((w) => w.id === weekId);
    if (!week) return { done: 0, total: 1, pct: 0 };
    
    const done = week.checkpoints.filter((c) => progress.completedCheckpoints.includes(c.id)).length;
    const scenarioDone = progress.assignments[weekId]?.submitted ? 1 : 0;
    const total = week.checkpoints.length + 1;
    return {
      doneCheckpoints: done,
      scenarioDone,
      doneTotal: done + scenarioDone,
      total,
      pct: Math.round(((done + scenarioDone) / total) * 100),
    };
  }, [progress.completedCheckpoints, progress.assignments]);

  const calculateOverallProgress = useCallback(() => {
    const totalCheckpoints = WEEKS.reduce((n, w) => n + w.checkpoints.length + 1, 0);
    const globalCompleted = 
      progress.completedCheckpoints.length + 
      Object.values(progress.assignments).filter((a) => a.submitted).length;
    
    return {
      globalCompleted,
      totalCheckpoints,
      globalPct: totalCheckpoints ? Math.round((globalCompleted / totalCheckpoints) * 100) : 0,
    };
  }, [progress.completedCheckpoints, progress.assignments]);

  return {
    progress,
    hydrated,
    toggleCheckpoint,
    setCheckpointScore,
    setAssignment,
    setNote,
    addVocab,
    removeVocab,
    updateVocab,
    exportProgress,
    importProgress,
    calculateWeekProgress,
    calculateOverallProgress,
  };
}
