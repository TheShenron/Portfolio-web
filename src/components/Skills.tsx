import { Crosshair, Database, Network, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    icon: Crosshair,
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux / Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    icon: Network,
    name: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST API Design", "WebSockets (Socket.IO)", "JWT Auth", "RBAC"],
  },
  {
    icon: Database,
    name: "Data & Infra",
    items: ["PostgreSQL", "Prisma", "MongoDB", "Redis", "BullMQ", "Docker", "AWS (S3, EC2)"],
  },
  {
    icon: Wrench,
    name: "Tools",
    items: ["Git", "Postman", "Linux CLI", "Agile / Scrum"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Skills</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ icon: Icon, name, items }) => (
          <Card key={name} className="p-5">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold">{name}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
