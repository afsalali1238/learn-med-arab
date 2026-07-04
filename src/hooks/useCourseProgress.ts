import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import type { VocabEntry } from "@/data/course";

const STORAGE_KEY = "medical-arabic-course-v1";

export interface CourseProgress {
  completedCheckpoints: string[];
  assignments: Record<string, { answers: string; submitted: boolean }>;
  notes: Record<string, string>;
  vocabBank: VocabEntry[];
}

const EMPTY: CourseProgress = {
  completedCheckpoints: [],
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

  const setAssignment = useCallback(
    (weekId: string, patch: Partial<{ answers: string; submitted: boolean }>) => {
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

  const exportProgress = useCallback(() => {
    try {
      const dataStr = JSON.stringify(progress, null, 2);
      const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `medical-arabic-progress-${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download", exportFileDefaultName);
      linkElement.click();
      
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

  return {
    progress,
    hydrated,
    toggleCheckpoint,
    setAssignment,
    setNote,
    addVocab,
    removeVocab,
    exportProgress,
    importProgress,
  };
}
