import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function WritingSection() {
  if (DATA.writing.length === 0) {
    return null;
  }

  return (
    <div className="flex min-h-0 flex-col gap-y-4">
      <h2 className="text-xl font-bold">Writing</h2>
      <div className="flex flex-col gap-3">
        {DATA.writing.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-border p-5 transition-all hover:ring-2 hover:ring-muted"
          >
            <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>{article.source}</span>
              <span className="tabular-nums">{article.date}</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug">{article.title}</h3>
              <ArrowUpRight
                className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                aria-hidden
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {article.subtitle}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
