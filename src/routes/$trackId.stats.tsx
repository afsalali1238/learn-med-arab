import { createFileRoute, useParams } from "@tanstack/react-router";
import { StatsView } from "@/components/course/StatsView";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { TRACKS } from "@/data/course";
import { useMemo } from "react";
import { Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/$trackId/stats")({
  component: StatsRoute,
});

function StatsRoute() {
  const { trackId } = Route.useParams();
  const track = TRACKS.find((t) => t.id === trackId);

  const {
    progress,
    exportProgress,
    exportAnkiCSV,
    importProgress,
    calculateWeekProgress,
    calculateOverallProgress,
    xp,
    level,
  } = useCourseProgress();

  const { totalCheckpoints, globalPct } = calculateOverallProgress(trackId);

  const perWeekPct = useMemo(() => {
    const map: Record<string, number> = {};
    if (track) {
      track.weeks.forEach((w) => {
        map[w.id] = calculateWeekProgress(track.id, w.id).pct;
      });
    }
    return map;
  }, [progress.completedCheckpoints, progress.assignments, calculateWeekProgress, track]);

  if (!track) {
    return <Navigate to="/" />;
  }

  return (
    <StatsView
      weeks={track.weeks}
      completedCheckpoints={progress.completedCheckpoints}
      assignments={progress.assignments}
      perWeekPct={perWeekPct}
      totalCheckpoints={totalCheckpoints - track.weeks.length}
      vocabCount={progress.vocabBank.length}
      globalPct={globalPct}
      xp={xp}
      level={level}
      onExport={exportProgress}
      onExportAnkiCSV={exportAnkiCSV}
      onImport={importProgress}
    />
  );
}
