import { BookOpen, Flame, GraduationCap, Menu, Trophy } from "lucide-react";
import type { Week } from "@/data/course";
import type { Stats } from "@/lib/gamification";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  courseTitle: string;
  weeks: Week[];
  activeWeekId: string;
  onSelectWeek: (id: string) => void;
  globalPct: number;
  globalCompleted: number;
  totalCheckpoints: number;
  perWeekPct: Record<string, number>;
  onOpenVocab: () => void;
  vocabCount: number;
  stats: Stats;
  streak: number;
  earnedBadges: number;
  totalBadges: number;
}

export function MobileTopBar({
  courseTitle,
  weeks,
  activeWeekId,
  onSelectWeek,
  globalPct,
  globalCompleted,
  totalCheckpoints,
  perWeekPct,
  onOpenVocab,
  vocabCount,
  stats,
  streak,
  earnedBadges,
  totalBadges,
}: Props) {
  const [open, setOpen] = useState(false);
  const activeWeek = weeks.find((w) => w.id === activeWeekId);

  return (
    <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur md:hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] max-w-[340px] p-0">
            <SheetHeader className="border-b border-border px-5 py-4">
              <SheetTitle className="flex items-center gap-2 text-left text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                {courseTitle}
              </SheetTitle>
            </SheetHeader>
            <div className="border-b border-border px-5 py-4">
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Progress
                </span>
                <span className="text-sm font-semibold">{globalPct}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${globalPct}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {globalCompleted} / {totalCheckpoints} checkpoints
              </div>
            </div>
            <nav className="max-h-[calc(100vh-260px)] overflow-y-auto px-3 py-3">
              <ul className="space-y-1">
                {weeks.map((w) => {
                  const isActive = w.id === activeWeekId;
                  const pct = perWeekPct[w.id] ?? 0;
                  return (
                    <li key={w.id}>
                      <button
                        onClick={() => {
                          onSelectWeek(w.id);
                          setOpen(false);
                        }}
                        className={cn(
                          "flex w-full flex-col gap-1.5 rounded-lg px-3 py-2.5 text-left transition-colors",
                          isActive
                            ? "bg-primary/10 text-foreground"
                            : "text-muted-foreground hover:bg-muted",
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted",
                            )}
                          >
                            {w.number}
                          </span>
                          <span className="line-clamp-2 text-sm font-medium leading-snug">
                            {w.title}
                          </span>
                        </div>
                        <div className="ml-8 h-1 overflow-hidden rounded-full bg-muted/60">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
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
            </nav>
            <div className="border-t border-border px-4 py-3">
              <Button
                onClick={() => {
                  onOpenVocab();
                  setOpen(false);
                }}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <BookOpen className="h-4 w-4" />
                Vocabulary Bank
                {vocabCount > 0 && (
                  <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {vocabCount}
                  </span>
                )}
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="min-w-0 flex-1">
          <div className="truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Week {activeWeek?.number} · {globalPct}%
          </div>
          <div className="truncate text-sm font-semibold text-foreground">
            {activeWeek?.title}
          </div>
        </div>

        <Button
          onClick={onOpenVocab}
          variant="outline"
          size="icon"
          className="shrink-0"
          aria-label="Vocabulary bank"
        >
          <BookOpen className="h-4 w-4" />
        </Button>
      </div>
      <div className="h-1 w-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${globalPct}%` }}
        />
      </div>
    </div>
  );
}
