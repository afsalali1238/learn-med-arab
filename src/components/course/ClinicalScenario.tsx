import { useState } from "react";
import { CheckCircle2, ChevronDown, Save, Send } from "lucide-react";
import { toast } from "sonner";
import type { Scenario } from "@/data/course";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface Props {
  scenario: Scenario;
  answers: string;
  submitted: boolean;
  onChangeAnswers: (v: string) => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
}

export function ClinicalScenario({
  scenario,
  answers,
  submitted,
  onChangeAnswers,
  onSaveDraft,
  onSubmit,
}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(submitted);

  const handleSave = () => {
    onSaveDraft();
    toast.success("Draft saved to your device.");
  };

  const handleSubmit = () => {
    if (!answers.trim()) {
      toast.error("Write your consultation before submitting.");
      return;
    }
    onSubmit();
    setDrawerOpen(true);
    toast.success("Consultation submitted — review the answer key below.");
  };

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Patient Scenario
          </span>
          {submitted && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Completed
            </span>
          )}
        </div>
        <p className="mb-4 text-[15px] leading-relaxed text-foreground">{scenario.patient}</p>
        <div className="rounded-lg border border-border bg-muted/40 p-4">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Instructions
          </div>
          <p className="text-sm leading-relaxed text-foreground">{scenario.instructions}</p>
        </div>
      </div>

      <div className="p-6">
        <label className="mb-2 block text-sm font-medium text-foreground">
          Your Consultation
        </label>
        <Textarea
          value={answers}
          onChange={(e) => onChangeAnswers(e.target.value)}
          placeholder="Type your Arabic response and transliteration here..."
          className="min-h-[180px] resize-y font-sans text-[15px] leading-relaxed"
          dir="ltr"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleSave} className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
          <Button onClick={handleSubmit} className="gap-2">
            <Send className="h-4 w-4" />
            Submit Consultation
          </Button>
          {submitted && (
            <Button
              variant="ghost"
              onClick={() => setDrawerOpen((o) => !o)}
              className="ml-auto gap-2"
            >
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", drawerOpen && "rotate-180")}
              />
              {drawerOpen ? "Hide" : "Show"} answer key
            </Button>
          )}
        </div>
      </div>

      {/* Hidden Review Drawer */}
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-500 ease-out",
          submitted && drawerOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="border-t border-border bg-gradient-to-br from-primary/5 to-transparent p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Answer Key & Rationale
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Arabic Script
                </div>
                <p
                  dir="rtl"
                  className="rounded-lg border border-border bg-background p-4 text-right font-arabic text-xl leading-loose text-foreground"
                >
                  {scenario.answerKey.arabic}
                </p>
              </div>

              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Transliteration
                </div>
                <p className="rounded-lg border border-border bg-background p-4 font-mono text-sm italic leading-relaxed text-foreground">
                  {scenario.answerKey.transliteration}
                </p>
              </div>

              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Clinical Rationale
                </div>
                <p className="rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-foreground">
                  {scenario.answerKey.rationale}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
