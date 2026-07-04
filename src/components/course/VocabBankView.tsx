import { useMemo, useState } from "react";
import { Plus, Trash2, Search, Download, Layers, List, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { VocabEntry } from "@/data/course";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpeakButton } from "./SpeakButton";

interface Props {
  entries: VocabEntry[];
  onAdd: (entry: Omit<VocabEntry, "id">) => void;
  onRemove: (id: string) => void;
}

export function VocabBankView({ entries, onAdd, onRemove }: Props) {
  const [arabic, setArabic] = useState("");
  const [translit, setTranslit] = useState("");
  const [note, setNote] = useState("");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "flashcards">("list");
  
  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

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

  const filteredEntries = useMemo(() => {
    if (!search.trim()) return entries;
    const s = search.toLowerCase();
    return entries.filter(
      (e) =>
        (e.arabic && e.arabic.includes(s)) ||
        (e.transliteration && e.transliteration.toLowerCase().includes(s)) ||
        (e.note && e.note.toLowerCase().includes(s))
    );
  }, [entries, search]);

  const exportCSV = () => {
    if (entries.length === 0) return;
    const header = "Arabic,Transliteration,Note\n";
    const csv = entries.map(e => 
      `"${e.arabic || ""}","${e.transliteration || ""}","${e.note || ""}"`
    ).join("\n");
    const blob = new Blob([header + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "medical_arabic_vocab.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    setFlashcardIndex((i) => (i + 1) % filteredEntries.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setFlashcardIndex((i) => (i - 1 + filteredEntries.length) % filteredEntries.length);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-4">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Vocabulary Bank</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Save Arabic terms to memorize. Stored on this device.
          </p>
        </div>
        {entries.length > 0 && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setViewMode(v => v === "list" ? "flashcards" : "list")} className="gap-2">
              {viewMode === "list" ? <Layers className="h-4 w-4" /> : <List className="h-4 w-4" />}
              {viewMode === "list" ? "Flashcards" : "List View"}
            </Button>
            <Button variant="outline" size="sm" onClick={exportCSV} className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        )}
      </div>

      {viewMode === "list" && (
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
      )}

      {entries.length > 0 && (
        <div className="mt-5 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFlashcardIndex(0);
              setIsFlipped(false);
            }}
            placeholder="Search vocabulary..."
            className="pl-9 bg-card"
          />
        </div>
      )}

      <div className="mt-5">
        {entries.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border py-10 text-center text-sm text-muted-foreground">
            No saved terms yet. Add one above, or tap the bookmark icon in any dialect table.
          </p>
        ) : filteredEntries.length === 0 ? (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No terms match your search.
          </p>
        ) : viewMode === "list" ? (
          <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
            {filteredEntries.map((e) => (
              <li key={e.id} className="flex items-start gap-3 px-4 py-3">
                <div className="min-w-0 flex-1">
                  {e.arabic && (
                    <div className="flex items-center gap-2 justify-end">
                      <p
                        dir="rtl"
                        className="text-right font-arabic text-lg leading-snug text-foreground"
                      >
                        {e.arabic}
                      </p>
                    </div>
                  )}
                  {e.transliteration && (
                    <p className="mt-0.5 font-mono text-sm italic text-muted-foreground">
                      {e.transliteration}
                    </p>
                  )}
                  {e.note && <p className="mt-1 text-xs text-muted-foreground">{e.note}</p>}
                </div>
                <div className="flex flex-col items-center gap-1">
                  {e.arabic && <SpeakButton text={e.arabic} />}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                    onClick={() => onRemove(e.id)}
                    aria-label="Remove term"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          /* Flashcard View */
          <div className="flex flex-col items-center max-w-md mx-auto">
            <div 
              className="w-full aspect-[4/3] perspective-1000 cursor-pointer"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={cn(
                "relative w-full h-full transition-transform duration-500 transform-style-3d shadow-sm rounded-2xl border border-border bg-card",
                isFlipped ? "rotate-y-180" : ""
              )}>
                {/* Front (Arabic) */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 text-center">
                  <p dir="rtl" className="font-arabic text-3xl sm:text-4xl text-foreground mb-4">
                    {filteredEntries[flashcardIndex].arabic}
                  </p>
                  <div className="text-xs text-muted-foreground flex items-center gap-1 mt-4">
                    <RotateCcw className="h-3 w-3" /> Click to flip
                  </div>
                </div>
                
                {/* Back (Transliteration/Note) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 text-center bg-muted/20">
                  <p className="font-mono text-xl sm:text-2xl text-foreground mb-3">
                    {filteredEntries[flashcardIndex].transliteration}
                  </p>
                  {filteredEntries[flashcardIndex].note && (
                    <p className="text-sm text-muted-foreground border-t border-border/50 pt-3 mt-2 w-full">
                      {filteredEntries[flashcardIndex].note}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 w-full justify-between">
              <Button variant="outline" size="icon" onClick={handlePrevCard}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium text-muted-foreground">
                  {flashcardIndex + 1} / {filteredEntries.length}
                </span>
                {filteredEntries[flashcardIndex].arabic && (
                  <SpeakButton text={filteredEntries[flashcardIndex].arabic} className="mt-2" />
                )}
              </div>
              <Button variant="outline" size="icon" onClick={handleNextCard}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
