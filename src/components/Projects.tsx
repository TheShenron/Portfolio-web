import { Check, Clock, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  icon: LucideIcon;
  name: string;
  pitch: string;
  tech: string[];
  bullets: string[];
  callout: string;
};

const projects: Project[] = [
  {
    icon: Clock,
    name: "Uzzy (Queue)",
    pitch:
      "A live-queue SaaS for walk-in businesses — barbershops and salons first, architected generically enough to extend to clinics, car service centers, and banks.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Socket.IO", "Docker", "Tailwind", "TypeScript"],
    bullets: [
      "Multi-server queueing simulation for accurate wait time (median error ~0.2 min).",
      'PostGIS-powered "nearby businesses" search built to scale to thousands.',
      "Realtime queue state with Socket.IO + Redis adapter, horizontally scalable.",
      "Race-proof by design: a Postgres partial unique index prevents duplicate joins.",
      "Shipped production infra: Dockerized API, Fly.io, Vercel, and a domain (uzzy.in).",
    ],
    callout:
      "The hard problem in this product wasn't CRUD — it was making the queue position and wait-time number trustworthy under concurrency. That's what I optimized for.",
  },
  {
    icon: Eye,
    name: "Kanshi",
    pitch:
      "A passive proctoring system for coding assessments — a VS Code extension, a backend, and an examiner dashboard shipped as one coherent product.",
    tech: ["TypeScript", "VS Code API", "Node.js", "Express", "MongoDB", "JWT / RBAC", "React", "Vite", "Docker"],
    bullets: [
      "VS Code extension captures focus changes, clipboard use, shortcuts, and editor activity — non-blocking, workflow-friendly.",
      "Three-role RBAC (admin / examiner / candidate) enforced at the API layer, not the client.",
      "Three independently deployable services (extension, API, dashboard), each Dockerized on its own.",
      "Built for passive signal capture instead of a lockdown-browser approach that makes candidates feel accused by default.",
    ],
    callout:
      "This is the project that shows I can build more than a website — a VS Code extension, an API, and a dashboard, all shipped as one coherent product.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Featured Projects
        </h2>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <Card key={project.name} className="flex flex-col gap-4 p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <Badge>Personal Project</Badge>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-subtle">{project.pitch}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-subtle">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto border-t border-border pt-4 text-sm italic leading-relaxed text-accent-ink">
                &ldquo;{project.callout}&rdquo;
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
