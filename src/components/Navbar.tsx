import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#home" className="flex items-center gap-2 font-semibold text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-bg text-sm font-bold text-accent-ink">
            GK
          </span>
          Gourav K
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-subtle md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={withBasePath("/resume.pdf")}
            download
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
