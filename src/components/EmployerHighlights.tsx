import { Cpu, HeartPulse, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Cpu,
    name: "OTA Update System for IoT Devices",
    description:
      "Secure cloud platform to push firmware updates with instant rollback on failure.",
    impact: "~70% cut in deployment effort, near-zero device downtime risk.",
  },
  {
    icon: HeartPulse,
    name: "Senior Care Management System",
    description:
      "Real-time health/safety monitoring for senior citizens over WebSockets, automated alerts, multi-timezone support.",
    impact: null,
  },
];

export function EmployerHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Employer Highlights
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, name, description, impact }) => (
          <Card key={name} className="flex gap-3 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-accent-ink">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">{name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-subtle">{description}</p>
              {impact && (
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent">
                  <TrendingDown className="h-3.5 w-3.5" />
                  {impact}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
