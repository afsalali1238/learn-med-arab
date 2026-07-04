import type { LucideIcon } from "lucide-react";
import {
  Award,
  BookOpen,
  Flame,
  GraduationCap,
  Rocket,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

export interface AchievementInput {
  checkpointsDone: number;
  weeksComplete: number;
  totalWeeks: number;
  scenariosSubmitted: number;
  vocabCount: number;
  streak: number;
  longestStreak: number;
  xp: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  earned: boolean;
  /** 0-100 progress toward earning */
  progress: number;
  /** short accent class for the icon tile */
  accent: string;
}

export function computeAchievements(i: AchievementInput): Achievement[] {
  const pct = (v: number, target: number) =>
    Math.max(0, Math.min(100, Math.round((v / target) * 100)));

  return [
    {
      id: "first-step",
      title: "First Step",
      description: "Complete your first checkpoint",
      icon: Sparkles,
      earned: i.checkpointsDone >= 1,
      progress: pct(i.checkpointsDone, 1),
      accent: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    {
      id: "week-one",
      title: "Week One Done",
      description: "Finish Week 1 completely",
      icon: Rocket,
      earned: i.weeksComplete >= 1,
      progress: pct(i.weeksComplete, 1),
      accent: "bg-primary/10 text-primary",
    },
    {
      id: "scenario-solver",
      title: "Scenario Solver",
      description: "Submit 3 clinical scenarios",
      icon: Award,
      earned: i.scenariosSubmitted >= 3,
      progress: pct(i.scenariosSubmitted, 3),
      accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "vocab-collector",
      title: "Vocab Collector",
      description: "Save 10 terms to your vocab bank",
      icon: BookOpen,
      earned: i.vocabCount >= 10,
      progress: pct(i.vocabCount, 10),
      accent: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      id: "streak-3",
      title: "On a Roll",
      description: "Keep a 3-day streak",
      icon: Flame,
      earned: i.longestStreak >= 3,
      progress: pct(Math.max(i.streak, i.longestStreak), 3),
      accent: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
      id: "streak-7",
      title: "Consistent Clinician",
      description: "Keep a 7-day streak",
      icon: Star,
      earned: i.longestStreak >= 7,
      progress: pct(Math.max(i.streak, i.longestStreak), 7),
      accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      id: "half-way",
      title: "Halfway There",
      description: "Complete 4 weeks",
      icon: Trophy,
      earned: i.weeksComplete >= 4,
      progress: pct(i.weeksComplete, 4),
      accent: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      id: "graduate",
      title: "Graduate",
      description: "Complete all weeks of the course",
      icon: GraduationCap,
      earned: i.weeksComplete >= i.totalWeeks && i.totalWeeks > 0,
      progress: pct(i.weeksComplete, Math.max(1, i.totalWeeks)),
      accent: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
  ];
}
