export type ResourceType = "video" | "audio" | "article" | "docs";

export interface Resource {
  type: ResourceType;
  title: string;
  description: string;
  url: string;
}

export interface VocabTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface Checkpoint {
  id: string;
  label: string;
}

export interface Scenario {
  patient: string;
  instructions: string;
  answerKey: {
    arabic: string;
    transliteration: string;
    rationale: string;
  };
}

export interface Week {
  id: string;
  number: number;
  title: string;
  timeAllocation: string;
  coreConcepts: string[];
  focusAreas: { title: string; description: string }[];
  vocabTables: VocabTable[];
  resources: Resource[];
  checkpoints: Checkpoint[];
  scenario: Scenario;
}

import { week1 as pharmacyWeek1 } from "./pharmacy/week1";
import { week2 as pharmacyWeek2 } from "./pharmacy/week2";
import { week3 as pharmacyWeek3 } from "./pharmacy/week3";
import { week4 as pharmacyWeek4 } from "./pharmacy/week4";
import { week5 as pharmacyWeek5 } from "./pharmacy/week5";
import { week6 as pharmacyWeek6 } from "./pharmacy/week6";

export const COURSE_TITLE = "Medical Arabic for Pharmacy";
export const COURSE_SUBTITLE = "Medications, Dosage & Instructions";
export const WEEKS: Week[] = [pharmacyWeek1, pharmacyWeek2, pharmacyWeek3, pharmacyWeek4, pharmacyWeek5, pharmacyWeek6];

export interface VocabEntry {
  id: string;
  english: string;
  arabic: string;
  transliteration: string;
  note?: string;
  nextReviewDate?: number;
  // SM-2 SRS Algorithm Fields
  repetition?: number; // Number of consecutive correct answers
  interval?: number; // Days until next review
  efactor?: number; // Easiness factor (starts at 2.5)
}

export const LEVELS = [
  {
    level: 1,
    title: "Student",
    min: 0,
  },
  {
    level: 2,
    title: "Clinical Novice",
    min: 100,
  },
  {
    level: 3,
    title: "Bedside Communicator",
    min: 250,
  },
  {
    level: 4,
    title: "Fluent Clinician",
    min: 450,
  },
  {
    level: 5,
    title: "Clinical Communicator",
    min: 700,
  },
];

export const XP_PER_QUIZ = 25;
export const XP_PER_FLASHCARD = 5;
export const XP_PER_WEEK = 50;

export function levelForXp(xp: number) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) current = l;
  }
  const idx = LEVELS.indexOf(current);
  const next = LEVELS[idx + 1] ?? null;
  return { ...current, next };
}
