import { Clock } from "lucide-react";
import type { Week, VocabEntry } from "@/data/course";
import { CoreConceptsCards } from "./CoreConceptsCards";
import { ResourceGrid } from "./ResourceGrid";
import { CheckpointTimeline } from "./CheckpointTimeline";
import { ClinicalScenario } from "./ClinicalScenario";
import { WeeklyNotes } from "./WeeklyNotes";
import { VocabTables } from "./VocabTables";

interface Props {
  week: Week;
  completedCheckpoints: string[];
  assignment: { answers: string; submitted: boolean };
  note: string;
  onToggleCheckpoint: (id: string) => void;
  onSetAssignment: (patch: Partial<{ answers: string; submitted: boolean }>) => void;
  onSetNote: (value: string) => void;
  onAddVocab: (entry: Omit<VocabEntry, "id">) => void;
}

export function WeekView({
  week,
  completedCheckpoints,
  assignment,
  note,
  onToggleCheckpoint,
  onSetAssignment,
  onSetNote,
  onAddVocab,
}: Props) {
  const weekDoneCount = week.checkpoints.filter((c) => completedCheckpoints.includes(c.id)).length;
  const weekPct = week.checkpoints.length
    ? Math.round((weekDoneCount / week.checkpoints.length) * 100)
    : 0;
  const scenarioDone = assignment.submitted;

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-10 md:px-10 md:py-14">
      {/* Header */}
      <header className="mb-8 md:mb-10">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary">
            Week {week.number}
          </span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {week.timeAllocation}
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          {week.title}
        </h1>

        <div className="mt-4 rounded-xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              This week
            </span>
            <span className="text-sm font-semibold text-foreground">
              {weekDoneCount} / {week.checkpoints.length} checkpoints · {weekPct}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={
                weekPct === 100
                  ? "h-full rounded-full bg-emerald-500 transition-all duration-500"
                  : "h-full rounded-full bg-primary transition-all duration-500"
              }
              style={{ width: `${weekPct}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>
              Scenario:{" "}
              <span className={scenarioDone ? "font-medium text-emerald-600 dark:text-emerald-400" : "font-medium text-foreground"}>
                {scenarioDone ? "Submitted" : "Not submitted"}
              </span>
            </span>
            <span>
              Notes:{" "}
              <span className="font-medium text-foreground">
                {note.trim() ? `${note.trim().split(/\s+/).length} words` : "empty"}
              </span>
            </span>
          </div>
        </div>
      </header>

      {/* Core Concepts prose */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Module Overview</h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          {week.coreConcepts.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Clinical Focus Areas</h2>
        <CoreConceptsCards focusAreas={week.focusAreas} />
      </section>

      {/* Vocab Tables */}
      {week.vocabTables.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Dialect Reference</h2>
          <VocabTables tables={week.vocabTables} onSaveToVocab={onAddVocab} />
        </section>
      )}

      {/* Resources */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Curated Learning Resources</h2>
        <ResourceGrid resources={week.resources} />
      </section>

      {/* Checkpoints */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Progress Checkpoints</h2>
        <CheckpointTimeline
          checkpoints={week.checkpoints}
          completed={completedCheckpoints}
          onToggle={onToggleCheckpoint}
        />
      </section>

      {/* Scenario */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Interactive Clinical Scenario</h2>
        <ClinicalScenario
          scenario={week.scenario}
          answers={assignment.answers}
          submitted={assignment.submitted}
          onChangeAnswers={(v) => onSetAssignment({ answers: v })}
          onSaveDraft={() => onSetAssignment({ submitted: false })}
          onSubmit={() => onSetAssignment({ submitted: true })}
        />
      </section>

      {/* Notes */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Weekly Clinical Notes</h2>
        <WeeklyNotes value={note} onChange={onSetNote} />
      </section>
    </div>
  );
}
