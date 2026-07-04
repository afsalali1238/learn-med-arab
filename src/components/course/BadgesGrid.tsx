import type { Badge } from "@/lib/gamification";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface Props {
  badges: Badge[];
}

export function BadgesGrid({ badges }: Props) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Achievements</h3>
        <span className="text-xs text-muted-foreground">
          {badges.filter((b) => b.earned).length} / {badges.length}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {badges.map((b) => (
          <div
            key={b.id}
            title={`${b.label} — ${b.hint}`}
            className={cn(
              "group relative flex aspect-square flex-col items-center justify-center rounded-lg border p-1 text-center transition-all",
              b.earned
                ? "border-primary/30 bg-primary/5 shadow-sm hover:scale-105"
                : "border-dashed border-border bg-muted/30 opacity-60",
            )}
          >
            <span className={cn("text-xl leading-none", !b.earned && "grayscale")}>
              {b.earned ? b.emoji : <Lock className="h-4 w-4 text-muted-foreground" />}
            </span>
            <span className="mt-1 line-clamp-1 text-[9px] font-medium leading-tight text-muted-foreground">
              {b.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
