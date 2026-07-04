import { WEEKS } from "@/data/course";
import type { CourseProgress } from "@/hooks/useCourseProgress";

export const XP_PER_CHECKPOINT = 10;
export const XP_PER_ASSIGNMENT = 50;
export const XP_PER_VOCAB = 5;
export const XP_PER_LEVEL = 100;

export interface Stats {
  xp: number;
  level: number;
  xpIntoLevel: number;
  xpForNext: number;
  levelPct: number;
}

export function computeStats(p: CourseProgress): Stats {
  const submittedCount = Object.values(p.assignments).filter((a) => a.submitted).length;
  const xp =
    p.completedCheckpoints.length * XP_PER_CHECKPOINT +
    submittedCount * XP_PER_ASSIGNMENT +
    p.vocabBank.length * XP_PER_VOCAB;
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = xp % XP_PER_LEVEL;
  const xpForNext = XP_PER_LEVEL;
  const levelPct = Math.round((xpIntoLevel / xpForNext) * 100);
  return { xp, level, xpIntoLevel, xpForNext, levelPct };
}

export interface Badge {
  id: string;
  label: string;
  emoji: string;
  earned: boolean;
  hint: string;
}

export function computeBadges(p: CourseProgress): Badge[] {
  const submittedCount = Object.values(p.assignments).filter((a) => a.submitted).length;
  const completedWeeks = WEEKS.filter((w) =>
    w.checkpoints.every((c) => p.completedCheckpoints.includes(c.id)),
  ).length;

  return [
    {
      id: "first-step",
      label: "First Dose",
      emoji: "💊",
      hint: "Complete your first checkpoint",
      earned: p.completedCheckpoints.length >= 1,
    },
    {
      id: "vocab-10",
      label: "Word Collector",
      emoji: "📖",
      hint: "Save 10 vocabulary terms",
      earned: p.vocabBank.length >= 10,
    },
    {
      id: "first-scenario",
      label: "Bedside Ready",
      emoji: "🩺",
      hint: "Submit your first scenario",
      earned: submittedCount >= 1,
    },
    {
      id: "week-done",
      label: "Module Master",
      emoji: "🏅",
      hint: "Finish every checkpoint in a week",
      earned: completedWeeks >= 1,
    },
    {
      id: "halfway",
      label: "Halfway There",
      emoji: "⚡",
      hint: "Complete 4 weeks",
      earned: completedWeeks >= 4,
    },
    {
      id: "all-scenarios",
      label: "Fluent Clinician",
      emoji: "🌟",
      hint: "Submit all 8 clinical scenarios",
      earned: submittedCount >= 8,
    },
    {
      id: "graduate",
      label: "Course Graduate",
      emoji: "🎓",
      hint: "Complete every checkpoint",
      earned: completedWeeks === WEEKS.length,
    },
  ];
}
