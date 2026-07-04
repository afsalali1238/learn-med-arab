import { useEffect, useMemo, useRef, useState } from "react";
import { WEEKS, COURSE_TITLE, COURSE_SUBTITLE, CAPSTONE } from "@/data/course";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { computeBadges, computeStats } from "@/lib/gamification";
import { Sidebar } from "./Sidebar";
import { MobileTopBar } from "./MobileTopBar";
import { WeekView } from "./WeekView";
import { VocabBankModal } from "./VocabBankModal";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

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

  const [activeWeekId, setActiveWeekId] = useState(WEEKS[0].id);
  const [vocabOpen, setVocabOpen] = useState(false);

  const activeWeek = useMemo(
    () => WEEKS.find((w) => w.id === activeWeekId) ?? WEEKS[0],
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

  const stats = useMemo(() => computeStats(progress), [progress]);
  const badges = useMemo(() => computeBadges(progress), [progress]);
  const earnedBadges = badges.filter((b) => b.earned).length;

  // Celebrations: level up, new badge, week complete
  const prevLevel = useRef(stats.level);
  const prevBadgeIds = useRef<string>("");
  const prevWeekPct = useRef<Record<string, number>>({});

  useEffect(() => {
    if (!hydrated) {
      prevLevel.current = stats.level;
      prevBadgeIds.current = badges.filter((b) => b.earned).map((b) => b.id).join(",");
      prevWeekPct.current = perWeekPct;
      return;
    }
    if (stats.level > prevLevel.current) {
      toast.success(`Level up! You reached level ${stats.level} 🎉`, {
        description: `+${stats.xp} total XP earned`,
      });
    }
    prevLevel.current = stats.level;

    const currentEarned = badges.filter((b) => b.earned);
    const currentKey = currentEarned.map((b) => b.id).join(",");
    if (currentKey !== prevBadgeIds.current && prevBadgeIds.current !== "") {
      const prevSet = new Set(prevBadgeIds.current.split(","));
      currentEarned.forEach((b) => {
        if (!prevSet.has(b.id)) {
          toast.success(`Achievement unlocked: ${b.label} ${b.emoji}`, {
            description: b.hint,
          });
        }
      });
    }
    prevBadgeIds.current = currentKey;

    Object.entries(perWeekPct).forEach(([wid, pct]) => {
      if (pct === 100 && prevWeekPct.current[wid] !== 100 && prevWeekPct.current[wid] !== undefined) {
        const w = WEEKS.find((x) => x.id === wid);
        if (w) toast.success(`Week ${w.number} complete! 🏅`, { description: w.title });
      }
    });
    prevWeekPct.current = perWeekPct;
  }, [stats.level, stats.xp, badges, perWeekPct, hydrated]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MobileTopBar
        courseTitle={COURSE_TITLE}
        weeks={WEEKS}
        activeWeekId={activeWeek.id}
        onSelectWeek={setActiveWeekId}
        globalPct={globalPct}
        globalCompleted={globalCompleted}
        totalCheckpoints={totalCheckpoints}
        perWeekPct={perWeekPct}
        onOpenVocab={() => setVocabOpen(true)}
        vocabCount={progress.vocabBank.length}
        stats={stats}
        streak={progress.streak}
        earnedBadges={earnedBadges}
        totalBadges={badges.length}
      />
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <Sidebar
          courseTitle={COURSE_TITLE}
          courseSubtitle={COURSE_SUBTITLE}
          weeks={WEEKS}
          activeWeekId={activeWeek.id}
          onSelectWeek={setActiveWeekId}
          globalPct={globalPct}
          globalCompleted={globalCompleted}
          totalCheckpoints={totalCheckpoints}
          perWeekPct={perWeekPct}
          onOpenVocab={() => setVocabOpen(true)}
          vocabCount={progress.vocabBank.length}
          capstoneTitle={CAPSTONE.title}
          stats={stats}
          streak={progress.streak}
          badges={badges}
        />
        <main className="min-w-0 flex-1 overflow-y-auto">
          <WeekView
            week={activeWeek}
            completedCheckpoints={progress.completedCheckpoints}
            assignment={progress.assignments[activeWeek.id] ?? { answers: "", submitted: false }}
            note={progress.notes[activeWeek.id] ?? ""}
            onToggleCheckpoint={toggleCheckpoint}
            onSetAssignment={(patch) => setAssignment(activeWeek.id, patch)}
            onSetNote={(v) => setNote(activeWeek.id, v)}
            onAddVocab={addVocab}
            stats={stats}
            streak={progress.streak}
            badges={badges}
          />
        </main>
      </div>
      <VocabBankModal
        open={vocabOpen}
        onOpenChange={setVocabOpen}
        entries={progress.vocabBank}
        onAdd={addVocab}
        onRemove={removeVocab}
      />
      <Toaster richColors position="top-center" />
    </div>
  );
}
