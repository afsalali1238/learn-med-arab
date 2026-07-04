import { useEffect, useMemo, useRef, useState } from "react";
import { WEEKS, COURSE_TITLE } from "@/data/course";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { AppHeader } from "./AppHeader";
import { BottomNav, type NavTab } from "./BottomNav";
import { SyllabusView } from "./SyllabusView";
import { VocabBankView } from "./VocabBankView";
import { StatsView } from "./StatsView";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-primary px-6 py-12 text-primary-foreground sm:py-16 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 0L100 50L50 100L0 50Z" />
          <path d="M25 25L75 75M75 25L25 75" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-1.5">
          <img src="/provia-logo.png" alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
          <span className="text-[11px] font-black italic uppercase tracking-widest text-primary-foreground/70">
            A Provia Product
          </span>
        </div>
        <h1 className="mb-4 text-3xl font-black italic uppercase tracking-tight sm:text-5xl">
          Clinical Fluency{" "}
          <span className="bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200 bg-clip-text text-transparent">
            in Dubai
          </span>
        </h1>
        <p className="mx-auto mb-6 max-w-xl text-primary-foreground/80 sm:text-lg">
          Master conversational Medical Arabic in 8 weeks. Learn Khaleeji and Levantine dialects, culturally-competent greetings, and navigate complex clinical scenarios.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="rounded-full bg-primary-foreground/20 px-3 py-1">8 Weeks</span>
          <span className="rounded-full bg-primary-foreground/20 px-3 py-1">24 Checkpoints</span>
          <span className="rounded-full bg-primary-foreground/20 px-3 py-1">2 Dialects</span>
        </div>
      </div>
    </div>
  );
}

export function CourseApp() {
  const {
    progress,
    hydrated,
    addVocab,
    removeVocab,
    exportProgress,
    importProgress,
  } = useCourseProgress();

  const [tab, setTab] = useState<NavTab>("syllabus");

  const totalCheckpoints = useMemo(
    () => WEEKS.reduce((n, w) => n + w.checkpoints.length + 1, 0), // +1 for the scenario
    [],
  );
  const globalCompleted = 
    progress.completedCheckpoints.length + 
    Object.values(progress.assignments).filter((a) => a.submitted).length;
  const globalPct = totalCheckpoints
    ? Math.round((globalCompleted / totalCheckpoints) * 100)
    : 0;

  const perWeekPct = useMemo(() => {
    const map: Record<string, number> = {};
    WEEKS.forEach((w) => {
      const doneCheckpoints = w.checkpoints.filter((c) =>
        progress.completedCheckpoints.includes(c.id),
      ).length;
      const scenarioDone = progress.assignments[w.id]?.submitted ? 1 : 0;
      const total = w.checkpoints.length + 1;
      
      map[w.id] = Math.round(((doneCheckpoints + scenarioDone) / total) * 100);
    });
    return map;
  }, [progress.completedCheckpoints, progress.assignments]);

  // Gentle celebration on week completion only
  const prevWeekPct = useRef<Record<string, number>>({});
  useEffect(() => {
    if (!hydrated) {
      prevWeekPct.current = perWeekPct;
      return;
    }
    Object.entries(perWeekPct).forEach(([wid, pct]) => {
      if (
        pct === 100 &&
        prevWeekPct.current[wid] !== 100 &&
        prevWeekPct.current[wid] !== undefined
      ) {
        const w = WEEKS.find((x) => x.id === wid);
        if (w) toast.success(`Week ${w.number} complete`, { description: w.title });
      }
    });
    prevWeekPct.current = perWeekPct;
  }, [perWeekPct, hydrated]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <AppHeader title={COURSE_TITLE} progressPct={globalPct} />

      <main className="flex-1 pb-20">
        {!hydrated ? (
          <div className="mx-auto max-w-3xl p-6 space-y-4">
            <Skeleton className="h-[200px] w-full rounded-2xl" />
            <Skeleton className="h-12 w-full rounded-2xl" />
            <Skeleton className="h-24 w-full rounded-2xl" />
            <Skeleton className="h-24 w-full rounded-2xl" />
          </div>
        ) : tab === "syllabus" ? (
          <>
            <HeroSection />
            <SyllabusView
              weeks={WEEKS}
              perWeekPct={perWeekPct}
            />
          </>
        ) : tab === "vocab" ? (
          <VocabBankView
            entries={progress.vocabBank}
            onAdd={addVocab}
            onRemove={removeVocab}
          />
        ) : (
          <StatsView
            weeks={WEEKS}
            completedCheckpoints={progress.completedCheckpoints}
            assignments={progress.assignments}
            perWeekPct={perWeekPct}
            totalCheckpoints={totalCheckpoints - WEEKS.length}
            vocabCount={progress.vocabBank.length}
            globalPct={globalPct}
            onExport={exportProgress}
            onImport={importProgress}
          />
        )}
      </main>

      <BottomNav
        active={tab}
        onChange={(t) => {
          setTab(t);
          if (typeof window !== "undefined") window.scrollTo({ top: 0 });
        }}
        vocabCount={progress.vocabBank.length}
      />

      <Toaster richColors position="top-center" />
    </div>
  );
}
