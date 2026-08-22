import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: "gourav143faz@gmail.com",
    href: "mailto:gourav143faz@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/theshenron",
    href: "https://www.linkedin.com/in/theshenron/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/TheShenron",
    href: "https://github.com/TheShenron",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
        Let&apos;s Connect
      </h2>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="max-w-md text-sm leading-relaxed text-subtle">
            Open to high-growth product and startup engineering roles — let&apos;s talk.
          </p>
          <a
            href="mailto:gourav143faz@gmail.com"
            className={cn(buttonVariants(), "mt-4 inline-flex")}
          >
            <Mail className="h-4 w-4" />
            Send an Email
          </a>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <Card className="flex h-full items-center gap-3 p-4 transition-colors hover:border-accent">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-bg text-accent-ink">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-faint">{label}</p>
                  <p className="break-all text-sm font-medium leading-snug">{value}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
