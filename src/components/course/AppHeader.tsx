import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  progressPct: number;
}

export function AppHeader({ title, progressPct }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-bold leading-tight sm:text-base">
            {title}
          </h1>
          <p className="text-[11px] text-muted-foreground sm:text-xs">
            Clinical Arabic Course
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground sm:text-sm">
            {progressPct}%
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8 shrink-0 text-muted-foreground">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
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
