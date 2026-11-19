/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText
                className="text-base font-medium text-muted-foreground sm:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.headline}
              />
              <p className="max-w-[600px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                {DATA.hook}
              </p>
              <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm">
                {DATA.profileLinks
                  .filter((link) => link.href && link.href !== "TODO")
                  .map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium text-foreground underline-offset-4 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar
                className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted"
                title={DATA.avatarUrl ? DATA.name : "TODO: avatar photo"}
              >
                {DATA.avatarUrl ? (
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
                ) : null}
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {DATA.work.length > 0 && (
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      )}
      {DATA.education.length > 0 && (
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center gap-x-3 justify-between">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border overflow-hidden object-cover bg-white flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex items-center justify-center text-[10px] md:text-xs font-semibold flex-none">
                        {education.school
                          .split(/\s+/)
                          .filter((word) => !["of", "the", "and", "for"].includes(word.toLowerCase()))
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none">
                        {education.school}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      )}
      {DATA.certifications.length > 0 && (
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.certifications.map((item, index) => (
              <BlurFade
                key={item.title}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center gap-x-3 justify-between">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <img
                      src={item.logoUrl}
                      alt={item.issuer}
                      className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border overflow-hidden object-cover bg-white flex-none"
                    />
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-snug">
                        {item.title}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {item.issuer}
                      </div>
                      {"credentialId" in item && item.credentialId ? (
                        <div className="font-sans text-[11px] leading-snug text-muted-foreground/80 break-all">
                          ID {item.credentialId}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {item.date}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      )}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {DATA.hackathons.length > 0 && (
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      )}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
