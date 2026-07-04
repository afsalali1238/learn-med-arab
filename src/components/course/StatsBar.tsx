import { Flame, Trophy, Zap } from "lucide-react";
import type { Stats } from "@/lib/gamification";
import { cn } from "@/lib/utils";

interface Props {
  stats: Stats;
  streak: number;
  earnedBadges: number;
  totalBadges: number;
  compact?: boolean;
}

export function StatsBar({ stats, streak, earnedBadges, totalBadges, compact }: Props) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card",
        compact ? "p-3" : "p-4",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <span className="text-sm font-black">{stats.level}</span>
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Level
            </div>
            <div className="text-sm font-semibold text-foreground">
              {stats.xp} XP
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 rounded-full bg-orange-500/10 px-2 py-1 text-orange-600 dark:text-orange-400">
            <Flame className="h-3.5 w-3.5" />
            <span className="font-semibold">{streak}</span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-amber-600 dark:text-amber-400">
            <Trophy className="h-3.5 w-3.5" />
            <span className="font-semibold">
              {earnedBadges}/{totalBadges}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="mb-1 flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Zap className="h-3 w-3" /> Next level
          </span>
          <span>
            {stats.xpIntoLevel} / {stats.xpForNext} XP
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
            style={{ width: `${stats.levelPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
