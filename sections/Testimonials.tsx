import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { copy, site } from "@/config/site";
import { reviews } from "@/config/reviews";
import { t } from "@/lib/copy";

/**
 * SOCIAL PROOF — real reviews only, supplied per event in
 * events/<slug>.config.ts. Never add invented testimonials or fake names.
 * Renders nothing when an event has no reviews yet.
 */
function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  if (reviews.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">{copy.testimonials.eyebrow}</p>
          <h2 id="testimonials-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            {copy.testimonials.heading}
          </h2>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso"
          >
            <Star size={15} className="fill-saffron text-saffron" />
            {t(copy.testimonials.ratingLink)}
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-brand border border-sand bg-white p-6 shadow-[0_20px_50px_-38px_rgba(36,28,21,0.5)]">
                <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={16} className="fill-saffron text-saffron" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-sans text-[0.95rem] leading-relaxed text-ink/85">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] font-display text-sm text-saffron-2">
                    {initials(r.name)}
                  </span>
                  <span className="leading-tight">
                    <span className="block font-sans text-sm font-semibold text-espresso">{r.name}</span>
                    <span className="block font-sans text-xs text-muted">{r.source ?? copy.testimonials.sourceLabel}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
