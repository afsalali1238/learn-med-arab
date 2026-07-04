import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { WEEKS, COURSE_TITLE } from "@/data/course";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { WeekView } from "./WeekView";
import { AppHeader } from "./AppHeader";
import { BottomNav, type NavTab } from "./BottomNav";
import { SyllabusView } from "./SyllabusView";
import { VocabBankView } from "./VocabBankView";
import { StatsView } from "./StatsView";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { totalXp, xpToLevel } from "@/lib/xp";

export function CourseApp() {
  const {
    progress,
    hydrated,
    toggleCheckpoint,
    setAssignment,
    setNote,
    addVocab,
    removeVocab,
  } = useCourseProgress();

  const [tab, setTab] = useState<NavTab>("syllabus");
  const [activeWeekId, setActiveWeekId] = useState<string | null>(null);

  const activeWeek = useMemo(
    () => (activeWeekId ? WEEKS.find((w) => w.id === activeWeekId) ?? null : null),
    [activeWeekId],
  );

  const totalCheckpoints = useMemo(
    () => WEEKS.reduce((n, w) => n + w.checkpoints.length, 0),
    [],
  );
  const globalCompleted = progress.completedCheckpoints.length;
  const globalPct = totalCheckpoints
    ? Math.round((globalCompleted / totalCheckpoints) * 100)
    : 0;

  const perWeekPct = useMemo(() => {
    const map: Record<string, number> = {};
    WEEKS.forEach((w) => {
      const done = w.checkpoints.filter((c) =>
        progress.completedCheckpoints.includes(c.id),
      ).length;
      map[w.id] = w.checkpoints.length
        ? Math.round((done / w.checkpoints.length) * 100)
        : 0;
    });
    return map;
  }, [progress.completedCheckpoints]);

  const xp = useMemo(
    () => totalXp(WEEKS, progress.completedCheckpoints, progress.assignments),
    [progress.completedCheckpoints, progress.assignments],
  );
  const { level, intoLevel, nextLevel } = xpToLevel(xp);

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

  const openWeek = (id: string) => {
    setActiveWeekId(id);
    // scroll to top on navigation
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };
  const closeWeek = () => setActiveWeekId(null);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <AppHeader title={COURSE_TITLE} level={level} xp={xp} progressPct={globalPct} />

      <main className="flex-1">
        {activeWeek ? (
          <div>
            <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeWeek}
                className="-ml-2 gap-1.5 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Syllabus
              </Button>
            </div>
            <WeekView
              week={activeWeek}
              completedCheckpoints={progress.completedCheckpoints}
              assignment={
                progress.assignments[activeWeek.id] ?? { answers: "", submitted: false }
              }
              note={progress.notes[activeWeek.id] ?? ""}
              onToggleCheckpoint={toggleCheckpoint}
              onSetAssignment={(patch) => setAssignment(activeWeek.id, patch)}
              onSetNote={(v) => setNote(activeWeek.id, v)}
              onAddVocab={addVocab}
            />
          </div>
        ) : tab === "syllabus" ? (
          <SyllabusView
            weeks={WEEKS}
            completedCheckpoints={progress.completedCheckpoints}
            assignments={progress.assignments}
            perWeekPct={perWeekPct}
            onSelectWeek={openWeek}
          />
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
            totalCheckpoints={totalCheckpoints}
            vocabCount={progress.vocabBank.length}
            streak={progress.streak}
            longestStreak={progress.longestStreak}
            xp={xp}
            level={level}
            intoLevel={intoLevel}
            nextLevel={nextLevel}
          />
        )}
      </main>

      {!activeWeek && (
        <BottomNav
          active={tab}
          onChange={(t) => {
            setTab(t);
            if (typeof window !== "undefined") window.scrollTo({ top: 0 });
          }}
          vocabCount={progress.vocabBank.length}
        />
      )}

      <Toaster richColors position="top-center" />
    </div>
  );
}
