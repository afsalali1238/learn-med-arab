import { Check } from "lucide-react";
import type { Checkpoint } from "@/data/course";
import { cn } from "@/lib/utils";

interface Props {
  checkpoints: Checkpoint[];
  completed: string[];
  onToggle: (id: string) => void;
}

export function CheckpointTimeline({ checkpoints, completed, onToggle }: Props) {
  return (
    <ol className="relative space-y-3 border-l-2 border-border pl-6">
      {checkpoints.map((c) => {
        const isDone = completed.includes(c.id);
        return (
          <li key={c.id} className="relative">
            <span
              className={cn(
                "absolute -left-[33px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors",
                isDone
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-border bg-background",
              )}
            >
              {isDone && <Check className="h-3 w-3" strokeWidth={3} />}
            </span>
            <button
              onClick={() => onToggle(c.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-lg border border-border bg-card p-4 text-left transition-all hover:border-primary/40",
                isDone && "border-emerald-500/30 bg-emerald-50/50",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors",
                  isDone
                    ? "border-emerald-500 bg-emerald-500"
                    : "border-input bg-background",
                )}
              >
                {isDone && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
              </span>
              <span
                className={cn(
                  "text-sm leading-relaxed transition-colors",
                  isDone ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {c.label}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
