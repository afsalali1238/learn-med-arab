import { Award, BookOpen, Flame, Target, Trophy, Zap } from "lucide-react";
import type { Week } from "@/data/course";
import { cn } from "@/lib/utils";
import { weekMaxXp, weekEarnedXp } from "@/lib/xp";

interface Props {
  weeks: Week[];
  completedCheckpoints: string[];
  assignments: Record<string, { submitted: boolean }>;
  perWeekPct: Record<string, number>;
  totalCheckpoints: number;
  vocabCount: number;
  streak: number;
  longestStreak: number;
  xp: number;
  level: number;
  intoLevel: number;
  nextLevel: number;
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent,
}: {
  icon: typeof Zap;
  label: string;
  value: string | number;
  hint?: string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div
        className={cn(
          "mb-2 flex h-9 w-9 items-center justify-center rounded-full",
          accent ?? "bg-primary/10 text-primary",
        )}
      >
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      {hint && <div className="mt-1 text-[11px] text-muted-foreground">{hint}</div>}
    </div>
  );
}

export function StatsView({
  weeks,
  completedCheckpoints,
  assignments,
  perWeekPct,
  totalCheckpoints,
  vocabCount,
  streak,
  longestStreak,
  xp,
  level,
  intoLevel,
  nextLevel,
}: Props) {
  const checkpointsDone = completedCheckpoints.length;
  const weeksComplete = Object.values(perWeekPct).filter((p) => p === 100).length;
  const scenariosSubmitted = Object.values(assignments).filter((a) => a.submitted).length;
  const levelPct = Math.round((intoLevel / nextLevel) * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h2 className="text-xl font-bold sm:text-2xl">Your Progress</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Track how you're growing week by week.
      </p>

      {/* Level card */}
      <div className="mt-5 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              Level {level}
            </div>
            <div className="mt-1 text-lg font-bold">Student</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
            <Zap className="h-4 w-4 fill-current" />
            <span className="text-sm font-bold tabular-nums">{xp} XP</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Progress to Level {level + 1}</span>
            <span className="tabular-nums">{intoLevel} / {nextLevel} XP</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${levelPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid stats */}
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard
          icon={Trophy}
          label="Weeks Complete"
          value={`${weeksComplete}/${weeks.length}`}
          accent="bg-amber-500/10 text-amber-600 dark:text-amber-400"
        />
        <StatCard
          icon={Target}
          label="Checkpoints"
          value={`${checkpointsDone}/${totalCheckpoints}`}
        />
        <StatCard
          icon={Award}
          label="Scenarios"
          value={`${scenariosSubmitted}/${weeks.length}`}
          accent="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
        />
        <StatCard
          icon={BookOpen}
          label="Vocab Saved"
          value={vocabCount}
          accent="bg-sky-500/10 text-sky-600 dark:text-sky-400"
        />
        <StatCard
          icon={Flame}
          label="Current Streak"
          value={`${streak}d`}
          hint={longestStreak > streak ? `Best: ${longestStreak}d` : undefined}
          accent="bg-orange-500/10 text-orange-600 dark:text-orange-400"
        />
        <StatCard
          icon={Zap}
          label="Total XP"
          value={xp}
          accent="bg-primary/10 text-primary"
        />
      </div>

      {/* Per-week breakdown */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold">Week-by-week</h3>
        <ul className="space-y-2">
          {weeks.map((w) => {
            const pct = perWeekPct[w.id] ?? 0;
            const submitted = !!assignments[w.id]?.submitted;
            const earned = weekEarnedXp(w, completedCheckpoints, submitted);
            const max = weekMaxXp(w);
            return (
              <li
                key={w.id}
                className="rounded-xl border border-border bg-card p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Week {w.number}
                    </div>
                    <div className="truncate text-sm font-medium">{w.title}</div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xs font-semibold tabular-nums">
                      {earned}/{max} XP
                    </div>
                    <div className="text-[11px] text-muted-foreground tabular-nums">{pct}%</div>
                  </div>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      pct === 100 ? "bg-emerald-500" : "bg-primary",
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
