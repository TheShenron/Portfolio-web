import { Briefcase, Calendar, Code2, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Calendar, value: "3.5+", label: "Years", sub: "Professional Experience" },
  { icon: Rocket, value: "3", label: "Systems", sub: "Production systems shipped end-to-end" },
  { icon: Code2, value: "2", label: "Projects", sub: "Personal projects built solo" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">About Me</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="space-y-4 text-base leading-relaxed text-subtle">
          <p>
            I&apos;m a full-stack engineer based in Chennai, India, currently building enterprise
            web platforms at Regami Solutions. I got here without a CS degree — everything I know
            was built by shipping real systems for real users, then going back and learning
            whatever the next problem demanded.
          </p>
          <p>
            What I care about: systems that stay correct under concurrency, not just under a
            demo. If two requests race — a double-tap, two people joining a queue at the same
            instant — the data should still be right. That&apos;s the thread running through both
            my professional work and my personal projects below.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <Card key={label} className="p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-bg text-accent-ink">
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-4 text-2xl font-bold tabular-nums">{value}</p>
              <p className="text-sm font-semibold text-accent">{label}</p>
              <p className="mt-1 text-xs leading-snug text-faint">{sub}</p>
            </Card>
          ))}
        </div>
      </div>

      <Card id="experience" className="mt-8 flex flex-col gap-6 p-6 sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-bg text-accent-ink">
          <Briefcase className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h3 className="font-semibold">Software Engineer — MERN Stack</h3>
          <p className="mt-1 text-sm text-subtle">
            <span className="font-medium text-accent">Regami Solutions</span> · Chennai, India
          </p>
          <p className="text-xs text-faint">Feb 2023 – Present</p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-subtle">
          3.5+ years delivering production-grade systems for enterprise clients across IoT,
          healthcare, and media, in an Agile/Scrum environment — plus JWT authentication,
          role-based access control, and React/Node.js performance work threaded through every
          project.
        </p>
      </Card>
    </section>
  );
}
