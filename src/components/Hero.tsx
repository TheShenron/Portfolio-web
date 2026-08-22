import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center rounded-full bg-accent-bg px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
            3.5+ Years of Experience
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Full-Stack <span className="text-accent">Engineer</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-subtle">
            React/Next.js · Node.js/NestJS · Real-Time Systems
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-subtle">
            Self-taught engineer, 3.5+ years shipping production systems for enterprise clients —
            no formal CS degree, just a track record of building things that work under real
            load.
          </p>

          <p className="mt-5 flex items-center gap-2 text-sm text-faint">
            <MapPin className="h-4 w-4" />
            Chennai, India
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={buttonVariants()}>
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: "outline" }))}>
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-full bg-accent-bg/40 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src={withBasePath("/profile.png")}
              alt="Gourav K"
              width={486}
              height={514}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-xl border border-border bg-surface p-3 shadow-lg sm:left-auto sm:right-[-1.5rem] sm:translate-x-0">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-bg text-accent-ink">
                <Clock className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs text-faint">Currently building</p>
                <p className="truncate text-sm font-semibold">Uzzy — Live Queue SaaS</p>
              </div>
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
