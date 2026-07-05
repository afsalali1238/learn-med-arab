## Plan: Medical Arabic for Pharmacists — Course App

A single-page React app on the existing TanStack Start stack. All 8 weeks of the curriculum from the uploaded doc are embedded as structured data. All user state persists to LocalStorage.

### Design & typography

- Palette: soft teal primary, slate grays, white surfaces, crisp borders — defined as semantic tokens in `src/styles.css` (`--primary`, `--accent`, `--muted`, `--border`, plus `--clinical-teal`, `--clinical-teal-soft`).
- Fonts loaded via `<link>` in `__root.tsx` head:
  - `Inter` (English UI/body)
  - `Tajawal` (Arabic script — right-aligned wherever Arabic is displayed, with `dir="rtl"`)
- Registered in `@theme` as `--font-sans` and `--font-arabic`, exposed as Tailwind `font-arabic` utility.

### Route & layout

- Single route: `src/routes/index.tsx`.
- `__root.tsx` head updated with real title/description: "Medical Arabic for Pharmacists — Clinical Fluency Course".
- Layout: two-column shell
  - **Sidebar (left, ~280px):**
    - Course title + subtitle
    - Global progress bar (% of all checkpoints across all 8 weeks checked)
    - Vertical list of Week 1–8 (active week highlighted, per-week mini progress dot)
    - Button opening **Clinical Vocabulary Bank** modal
  - **Main content (right):** scrollable, active week's module

### Course data

File: `src/data/course.ts` — exports `WEEKS: Week[]` with all 8 weeks parsed from the uploaded curriculum. Each week has:

```
{ id, number, title, timeAllocation, coreConcepts (paragraph[]),
  vocabTable: { headers, rows }[],
  resources: [{ type: 'video'|'audio'|'article', title, description, url }],
  checkpoints: [{ id, label }],
  scenario: { patient, instructions,
    answerKey: { arabic, transliteration, rationale } } }
```

Weeks embedded (titles from the doc):

1. Pharmacy Counter Basics & Culturally Competent Greetings
2. Symptom Elicitation & Anatomical Terminology
3. Explaining Dosage, Frequencies, and Administration Routes
4. Antimicrobial & Antibiotic Counseling
5. Pain Assessment & OTC Triage
6. Side Effects, Adverse Reactions & High-Risk Meds
7. Chronic Disease Counseling (Diabetes, Hypertension, Ramadan)
8. Empathy, De-escalation, and Handling Confused Patients

Where the source doc snippet is thin for a week, we fill using the same structural pattern (concepts, dialect table, 3 resources, 3 checkpoints, scenario + answer key) drawing on the doc's stated learning objectives — clearly grounded in the curriculum, not invented topics.

### Components (`src/components/course/`)

- `CourseApp.tsx` — top-level, hosts `courseProgress` state + LocalStorage hook
- `Sidebar.tsx` — title, global progress, week list, vocab bank button
- `WeekView.tsx` — orchestrates one week's sections
- `WeekHeader.tsx`
- `CoreConceptsCards.tsx`
- `ResourceGrid.tsx` — icons (📺/🎧/📝) via lucide (Video, Headphones, FileText), external links `target="_blank" rel="noopener noreferrer"`
- `CheckpointTimeline.tsx` — custom checkboxes, instant progress update
- `ClinicalScenario.tsx` — patient scenario + instructions, textarea, Save Draft / Submit buttons, collapsible answer key drawer (framer-motion-free CSS transition) showing Arabic (RTL, `font-arabic`), transliteration (italic), rationale
- `WeeklyNotes.tsx` — auto-save textarea (debounced)
- `VocabBankModal.tsx` — shadcn Dialog, add/remove Arabic + transliteration pairs
- `ProgressBar.tsx`

### State & persistence

Custom hook `useCourseProgress` in `src/hooks/useCourseProgress.ts`:

- Shape:
  ```
  { completedCheckpoints: string[],
    assignments: Record<weekId, { answers: string, submitted: boolean }>,
    notes: Record<weekId, string>,
    vocabBank: { id, arabic, transliteration, note? }[] }
  ```
- Loads from `localStorage.getItem('medical-arabic-course-v1')` on mount (SSR-guarded).
- Writes the full state on every mutation via `useEffect`.

### Interaction details

- Checkpoint toggle → updates `completedCheckpoints` → global + weekly progress recompute (memoized).
- "Save Draft" saves textarea to `assignments[weekId].answers`, `submitted: false`, toast confirmation (sonner).
- "Submit Consultation" sets `submitted: true`, smoothly reveals answer key drawer beneath the scenario (max-height + opacity transition). Status badge switches to "Completed".
- Weekly notes textarea debounced 400ms → saves to `notes[weekId]`.
- Vocab bank modal: add form (Arabic input `dir="rtl" font-arabic`, transliteration input), list with delete.

### Out of scope

- No backend/auth (LocalStorage only, per request).
- No audio playback in-app — external links open in a new tab.
- No animations beyond CSS transitions.

### Technical notes

- Uses existing shadcn primitives: `Button`, `Card`, `Dialog`, `Progress`, `Textarea`, `Input`, `Badge`, `Separator`, `ScrollArea`.
- Icons from `lucide-react`.
- Toasts from existing `sonner` setup (add `<Toaster />` in `__root.tsx` if not present).
- LocalStorage access guarded with `typeof window !== 'undefined'` for SSR safety.
