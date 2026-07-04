import type { Week } from "@/data/course";

// XP model: each checkpoint = 10 XP, submitting the weekly scenario = 30 XP
export const XP_PER_CHECKPOINT = 10;
export const XP_PER_SCENARIO = 30;

export function weekMaxXp(week: Week): number {
  return week.checkpoints.length * XP_PER_CHECKPOINT + XP_PER_SCENARIO;
}

export function weekEarnedXp(
  week: Week,
  completedCheckpoints: string[],
  scenarioSubmitted: boolean,
): number {
  const cpXp = week.checkpoints.filter((c) => completedCheckpoints.includes(c.id)).length *
    XP_PER_CHECKPOINT;
  return cpXp + (scenarioSubmitted ? XP_PER_SCENARIO : 0);
}

export function totalXp(
  weeks: Week[],
  completedCheckpoints: string[],
  assignments: Record<string, { submitted: boolean }>,
): number {
  return weeks.reduce(
    (sum, w) => sum + weekEarnedXp(w, completedCheckpoints, !!assignments[w.id]?.submitted),
    0,
  );
}

// Level: 200 XP per level, starting at level 1
export const XP_PER_LEVEL = 200;
export function xpToLevel(xp: number): { level: number; intoLevel: number; nextLevel: number } {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const intoLevel = xp % XP_PER_LEVEL;
  return { level, intoLevel, nextLevel: XP_PER_LEVEL };
}
