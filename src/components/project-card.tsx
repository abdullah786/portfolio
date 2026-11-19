/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ScreenshotPlaceholder() {
  return (
    <div className="w-full h-48 bg-muted flex items-center justify-center px-6">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        TODO: screenshot
      </span>
    </div>
  );
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || src === "TODO" || imageError) {
    return <ScreenshotPlaceholder />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  status?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  status,
  links,
  className,
}: Props) {
  const hasLink = Boolean(href && href !== "TODO");
  const hasVideo = Boolean(video && video !== "TODO");
  const media = hasVideo ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-48 object-cover"
    />
  ) : (
    <ProjectImage src={image ?? ""} alt={title} />
  );

  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200",
        hasLink && "cursor-pointer",
        className
      )}
    >
      <div className="relative shrink-0">
        {hasLink ? (
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
            <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold">{title}</h3>
              {status ? (
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-wide h-5 px-1.5"
                >
                  {status}
                </Badge>
              ) : null}
            </div>
            {dates ? (
              <time className="text-xs text-muted-foreground">{dates}</time>
            ) : null}
          </div>
          {hasLink ? (
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          ) : null}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
