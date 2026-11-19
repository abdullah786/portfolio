import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;
const GROUP_ORDER = ["saas", "apps"] as const;

export default function ProjectsSection() {
  const groups = GROUP_ORDER.map((name) => ({
    name,
    projects: DATA.projects.filter((project) => project.group === name),
  })).filter((group) => group.projects.length > 0);

  return (
    <div>
      <div className="flex min-h-0 flex-col gap-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold">Projects</h2>
        </BlurFade>
        {groups.map((group) => (
          <div key={group.name} className="flex flex-col gap-y-4">
            <h3 className="text-sm font-medium lowercase text-muted-foreground">
              {group.name}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] auto-rows-fr">
              {group.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  className="h-full"
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                    status={project.status}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
