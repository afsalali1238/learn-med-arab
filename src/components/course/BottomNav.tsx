import { BookOpen, LayoutList, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavTab = "syllabus" | "vocab" | "stats";

interface Props {
  active: NavTab;
  onChange: (tab: NavTab) => void;
  vocabCount: number;
}

export function BottomNav({ active, onChange, vocabCount }: Props) {
  const items: { id: NavTab; label: string; Icon: typeof LayoutList; badge?: number }[] = [
    { id: "syllabus", label: "Syllabus", Icon: LayoutList },
    { id: "vocab", label: "Vocab Bank", Icon: BookOpen, badge: vocabCount },
    { id: "stats", label: "Stats", Icon: TrendingUp },
  ];

  return (
    <nav
      className="sticky bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-3xl items-stretch">
        {items.map(({ id, label, Icon, badge }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(id)}
                className={cn(
                  "relative flex w-full flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="relative">
                  <Icon className={cn("h-5 w-5", isActive && "stroke-[2.5]")} />
                  {badge !== undefined && badge > 0 && (
                    <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-primary-foreground">
                      {badge}
                    </span>
                  )}
                </div>
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
