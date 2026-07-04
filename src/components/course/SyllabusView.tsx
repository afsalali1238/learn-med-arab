import { ChevronRight, Lock, Check } from "lucide-react";
import type { Week } from "@/data/course";
import { cn } from "@/lib/utils";
import { weekMaxXp, weekEarnedXp } from "@/lib/xp";

interface Props {
  weeks: Week[];
  completedCheckpoints: string[];
  assignments: Record<string, { submitted: boolean }>;
  perWeekPct: Record<string, number>;
  onSelectWeek: (id: string) => void;
}

export function SyllabusView({
  weeks,
  completedCheckpoints,
  assignments,
  perWeekPct,
  onSelectWeek,
}: Props) {
  // A week is unlocked if it's the first, or if the previous week is 100% complete
  const isUnlocked = (index: number): boolean => {
    if (index === 0) return true;
    const prev = weeks[index - 1];
    return (perWeekPct[prev.id] ?? 0) === 100;
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-5">
        <h2 className="text-xl font-bold sm:text-2xl">8-Week Syllabus</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Complete each week's scenario to unlock the next.
        </p>
      </div>

      <ol className="space-y-2.5">
        {weeks.map((week, index) => {
          const unlocked = isUnlocked(index);
          const pct = perWeekPct[week.id] ?? 0;
          const done = pct === 100;
          const submitted = !!assignments[week.id]?.submitted;
          const maxXp = weekMaxXp(week);
          const earnedXp = weekEarnedXp(week, completedCheckpoints, submitted);
          const remainingXp = Math.max(0, maxXp - earnedXp);

          return (
            <li key={week.id}>
              <button
                type="button"
                disabled={!unlocked}
                onClick={() => unlocked && onSelectWeek(week.id)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition-all sm:gap-4 sm:p-4",
                  unlocked
                    ? "border-border bg-card hover:border-primary/40 hover:shadow-sm active:scale-[0.99]"
                    : "border-dashed border-border/60 bg-muted/30 opacity-75",
                )}
                aria-label={`Week ${week.number}: ${week.title}${unlocked ? "" : " (locked)"}`}
              >
                {/* Number / lock / check circle */}
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-12 sm:w-12",
                    done
                      ? "bg-emerald-500 text-white"
                      : unlocked
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground",
                  )}
                >
                  {done ? (
                    <Check className="h-5 w-5" strokeWidth={3} />
                  ) : unlocked ? (
                    week.number
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Week {week.number}
                    </span>
                    {unlocked && remainingXp > 0 && (
                      <span className="text-[10px] font-semibold text-primary">
                        +{remainingXp} XP
                      </span>
                    )}
                    {done && (
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Complete
                      </span>
                    )}
                  </div>
                  <h3 className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug sm:text-[15px]">
                    {week.title}
                  </h3>
                  {unlocked ? (
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            done ? "bg-emerald-500" : "bg-primary",
                          )}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="shrink-0 text-[11px] font-medium tabular-nums text-muted-foreground">
                        {pct}%
                      </span>
                    </div>
                  ) : (
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Finish Week {week.number - 1} to unlock
                    </p>
                  )}
                </div>

                {unlocked && (
                  <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
