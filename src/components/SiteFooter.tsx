import { Github } from "lucide-react";

import { Container } from "@/components/Container";
import { Wordmark } from "@/components/Wordmark";
import { site } from "@/lib/site";

const REPO_URL = "https://github.com/Anmol1696/smartcloudsolutions.ae";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-5">
            <Wordmark />
            <span className="text-xs text-muted-foreground">
              © {year} {site.legalName}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={site.github.anmol}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — Anmol Yadav"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.github.rohit}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub — Rohit Aggarwal"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              View source ↗
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
