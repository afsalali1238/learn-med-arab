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

export function CourseApp() {
  const {
    progress,
    hydrated,
    addVocab,
    removeVocab,
    updateVocab,
    exportProgress,
    importProgress,
    calculateWeekProgress,
    calculateOverallProgress,
  } = useCourseProgress();

  const [tab, setTab] = useState<NavTab>("syllabus");

  const { totalCheckpoints, globalPct } = calculateOverallProgress();

  const perWeekPct = useMemo(() => {
    const map: Record<string, number> = {};
    WEEKS.forEach((w) => {
      map[w.id] = calculateWeekProgress(w.id).pct;
    });
    return map;
  }, [progress.completedCheckpoints, progress.assignments, calculateWeekProgress]);

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
          <SyllabusView
            weeks={WEEKS}
            perWeekPct={perWeekPct}
          />
        ) : tab === "vocab" ? (
          <VocabBankView
            entries={progress.vocabBank}
            onAdd={addVocab}
            onRemove={removeVocab}
            onUpdate={updateVocab}
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
