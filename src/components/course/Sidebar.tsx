import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import type { Week } from "@/data/course";
import type { Badge, Stats } from "@/lib/gamification";
import { Button } from "@/components/ui/button";
import { StatsBar } from "./StatsBar";
import { BadgesGrid } from "./BadgesGrid";
import { cn } from "@/lib/utils";

interface Props {
  courseTitle: string;
  courseSubtitle: string;
  weeks: Week[];
  activeWeekId: string;
  onSelectWeek: (id: string) => void;
  globalPct: number;
  globalCompleted: number;
  totalCheckpoints: number;
  perWeekPct: Record<string, number>;
  onOpenVocab: () => void;
  vocabCount: number;
  capstoneTitle: string;
}

export function Sidebar({
  courseTitle,
  courseSubtitle,
  weeks,
  activeWeekId,
  onSelectWeek,
  globalPct,
  globalCompleted,
  totalCheckpoints,
  perWeekPct,
  onOpenVocab,
  vocabCount,
  capstoneTitle,
}: Props) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[300px] shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground md:flex">
      <div className="flex items-center gap-3 border-b border-border px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold leading-tight">{courseTitle}</div>
          <div className="truncate text-xs text-muted-foreground">{courseSubtitle}</div>
        </div>
      </div>

      <div className="border-b border-border px-6 py-5">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Course Progress
          </span>
          <span className="text-sm font-semibold text-foreground">{globalPct}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${globalPct}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {globalCompleted} / {totalCheckpoints} checkpoints completed
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Weekly Modules
        </div>
        <ul className="space-y-1">
          {weeks.map((w) => {
            const isActive = w.id === activeWeekId;
            const pct = perWeekPct[w.id] ?? 0;
            return (
              <li key={w.id}>
                <button
                  onClick={() => onSelectWeek(w.id)}
                  className={cn(
                    "group flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-colors",
                    isActive
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground group-hover:bg-background",
                      )}
                    >
                      {w.number}
                    </span>
                    <span className="line-clamp-2 text-sm font-medium leading-snug">
                      {w.title}
                    </span>
                  </div>
                  <div className="ml-8 h-1 w-[calc(100%-2rem)] overflow-hidden rounded-full bg-muted/60">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-500",
                        pct === 100 ? "bg-emerald-500" : "bg-primary/70",
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Capstone
          </div>
          <div className="mt-1 text-sm font-medium leading-snug text-foreground">
            {capstoneTitle}
          </div>
        </div>
      </nav>

      <div className="border-t border-border px-4 py-4">
        <Button
          onClick={onOpenVocab}
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Clinical Vocabulary Bank
          {vocabCount > 0 && (
            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {vocabCount}
            </span>
          )}
        </Button>
      </div>
    </aside>
  );
}
