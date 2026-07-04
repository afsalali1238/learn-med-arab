import { useCallback, useEffect, useState } from "react";
import type { VocabEntry } from "@/data/course";

const STORAGE_KEY = "medical-arabic-course-v1";

export interface CourseProgress {
  completedCheckpoints: string[];
  assignments: Record<string, { answers: string; submitted: boolean }>;
  notes: Record<string, string>;
  vocabBank: VocabEntry[];
  streak: number;
  longestStreak: number;
  lastActiveDate: string | null;
}

const EMPTY: CourseProgress = {
  completedCheckpoints: [],
  assignments: {},
  notes: {},
  vocabBank: [],
  streak: 0,
  longestStreak: 0,
  lastActiveDate: null,
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
      streak: parsed.streak ?? 0,
      longestStreak: parsed.longestStreak ?? 0,
      lastActiveDate: parsed.lastActiveDate ?? null,
    };
  } catch {
    return EMPTY;
  }
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak(p: CourseProgress): CourseProgress {
  const today = todayKey();
  if (p.lastActiveDate === today) return p;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const nextStreak = p.lastActiveDate === yesterday ? p.streak + 1 : 1;
  return {
    ...p,
    streak: nextStreak,
    longestStreak: Math.max(p.longestStreak, nextStreak),
    lastActiveDate: today,
  };
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
    setProgress((p) => ({
      ...p,
      vocabBank: [
        ...p.vocabBank,
        { ...entry, id: `v-${Date.now()}-${Math.random().toString(36).slice(2, 7)}` },
      ],
    }));
  }, []);

  const removeVocab = useCallback((id: string) => {
    setProgress((p) => ({ ...p, vocabBank: p.vocabBank.filter((v) => v.id !== id) }));
  }, []);

  return {
    progress,
    hydrated,
    toggleCheckpoint,
    setAssignment,
    setNote,
    addVocab,
    removeVocab,
  };
}
