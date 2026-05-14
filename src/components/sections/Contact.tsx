import { ArrowRight, Mail } from "lucide-react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

interface Detail {
  label: string;
  value: string;
  href?: string;
}

const details: Detail[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "Booking",
    value: "cal.com/smartcloud-lab",
    href: site.bookingUrl,
  },
  {
    label: "GitHub",
    value: "Anmol1696 · web3cook",
  },
  { label: "Location", value: site.location },
  { label: "Response", value: "Within 24h · weekdays" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-16 md:py-20">
      <Container>
        <div className="grid gap-10 rounded-2xl border border-border bg-foreground p-6 text-background md:grid-cols-[1.2fr_1fr] md:p-8 lg:p-10">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-background/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-background/70">
              Contact
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Bring a messy system. Leave with a build plan.
            </h2>
            <p className="max-w-prose text-pretty text-base leading-7 text-background/70">
              Send the repo, the architecture sketch, or the operational
              failure. We&apos;ll reply with the first two or three useful next
              steps before the call.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" variant="subtle">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30-min call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="border-background/20 text-background hover:border-background/40 hover:bg-background/10"
              >
                <a href={`mailto:${site.email}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </Button>
            </div>
          </div>

          <dl className="flex flex-col gap-4 self-start rounded-xl border border-background/15 bg-background/5 p-5">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[6rem_1fr] gap-4 text-sm"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-background/45">
                  {d.label}
                </dt>
                <dd className="text-background/86">
                  {d.href ? (
                    <a
                      href={d.href}
                      target={
                        d.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        d.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="link-underline text-background"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span>{d.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
