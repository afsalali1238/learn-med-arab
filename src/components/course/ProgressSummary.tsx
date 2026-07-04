import { CheckCircle2, ClipboardCheck, BookMarked, CalendarDays } from "lucide-react";

interface Props {
  globalPct: number;
  checkpointsDone: number;
  checkpointsTotal: number;
  weeksComplete: number;
  weeksTotal: number;
  scenariosSubmitted: number;
  scenariosTotal: number;
  vocabSaved: number;
  activeDays: number;
  compact?: boolean;
}

export function ProgressSummary({
  globalPct,
  checkpointsDone,
  checkpointsTotal,
  weeksComplete,
  weeksTotal,
  scenariosSubmitted,
  scenariosTotal,
  vocabSaved,
  activeDays,
  compact,
}: Props) {
  const stats = [
    {
      icon: CheckCircle2,
      label: "Checkpoints",
      value: `${checkpointsDone}/${checkpointsTotal}`,
    },
    {
      icon: ClipboardCheck,
      label: "Scenarios",
      value: `${scenariosSubmitted}/${scenariosTotal}`,
    },
    {
      icon: BookMarked,
      label: "Vocab saved",
      value: `${vocabSaved}`,
    },
    {
      icon: CalendarDays,
      label: "Active days",
      value: `${activeDays}`,
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Overall Progress
          </div>
          <div className="text-2xl font-bold text-foreground">
            {globalPct}
            <span className="text-base font-medium text-muted-foreground">%</span>
          </div>
        </div>
        <div className="text-right text-xs text-muted-foreground">
          <div className="font-medium text-foreground">
            {weeksComplete} / {weeksTotal}
          </div>
          <div>weeks complete</div>
        </div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${globalPct}%` }}
        />
      </div>

      {!compact && (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 rounded-lg border border-border/60 bg-background/50 px-2.5 py-2"
            >
              <s.icon className="h-4 w-4 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-sm font-semibold text-foreground">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
