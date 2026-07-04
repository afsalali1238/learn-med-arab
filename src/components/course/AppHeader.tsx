import { Zap } from "lucide-react";

interface Props {
  title: string;
  level: number;
  xp: number;
  progressPct: number;
}

export function AppHeader({ title, level, xp, progressPct }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-bold leading-tight sm:text-base">
            {title}
          </h1>
          <p className="text-[11px] text-muted-foreground sm:text-xs">
            Level {level} · Student
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          <Zap className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
          <span className="text-xs font-semibold tabular-nums sm:text-sm">
            {xp} XP
          </span>
        </div>
      </div>
      <div className="h-1 w-full bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </header>
  );
}
