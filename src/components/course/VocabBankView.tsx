import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { VocabEntry } from "@/data/course";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  entries: VocabEntry[];
  onAdd: (entry: Omit<VocabEntry, "id">) => void;
  onRemove: (id: string) => void;
}

export function VocabBankView({ entries, onAdd, onRemove }: Props) {
  const [arabic, setArabic] = useState("");
  const [translit, setTranslit] = useState("");
  const [note, setNote] = useState("");

  const submit = () => {
    if (!arabic.trim() && !translit.trim()) return;
    onAdd({
      arabic: arabic.trim(),
      transliteration: translit.trim(),
      note: note.trim() || undefined,
    });
    setArabic("");
    setTranslit("");
    setNote("");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <h2 className="text-xl font-bold sm:text-2xl">Vocabulary Bank</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Save Arabic terms and transliterations you want to memorize. Stored on this device.
      </p>

      <div className="mt-5 grid gap-3 rounded-2xl border border-border bg-card p-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">Arabic</label>
          <Input
            dir="rtl"
            className="text-right font-arabic text-base"
            value={arabic}
            onChange={(e) => setArabic(e.target.value)}
            placeholder="السلام عليكم"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Transliteration
          </label>
          <Input
            value={translit}
            onChange={(e) => setTranslit(e.target.value)}
            placeholder="As-salamu alaykum"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">
            Note (optional)
          </label>
          <Input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g., Khaleeji formal greeting"
          />
        </div>
        <div className="sm:col-span-2">
          <Button onClick={submit} className="w-full gap-2">
            <Plus className="h-4 w-4" />
            Add to Vocabulary Bank
          </Button>
        </div>
      </div>

      <div className="mt-5">
        {entries.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
            No saved terms yet. Add one above, or tap the bookmark icon in any dialect table.
          </p>
        ) : (
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
            {entries.map((e) => (
              <li key={e.id} className="flex items-start gap-3 px-4 py-3">
                <div className="min-w-0 flex-1">
                  {e.arabic && (
                    <p
                      dir="rtl"
                      className="text-right font-arabic text-lg leading-snug text-foreground"
                    >
                      {e.arabic}
                    </p>
                  )}
                  {e.transliteration && (
                    <p className="mt-0.5 font-mono text-sm italic text-muted-foreground">
                      {e.transliteration}
                    </p>
                  )}
                  {e.note && <p className="mt-1 text-xs text-muted-foreground">{e.note}</p>}
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                  onClick={() => onRemove(e.id)}
                  aria-label="Remove term"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
