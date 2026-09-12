import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

/**
 * SOCIAL PROOF — "What our customers say".
 * These are REAL Google reviews for Madeena (pulled from the business's Google
 * profile), lightly tidied for punctuation only — names, wording and ratings are
 * genuine. Do not add invented testimonials or fake names here.
 */
type Review = { name: string; rating: number; quote: string };

const reviews: Review[] = [
  {
    name: "Shahul Hameed",
    rating: 5,
    quote:
      "Thank you for making our special day even more special! The menu was exactly what we wanted, and the service team made everyone feel taken care of. Our family and friends are still talking about how delicious the food was.",
  },
  {
    name: "Shoukkathali MA",
    rating: 5,
    quote: "Quality services, affordable pricing. Highly recommended.",
  },
  {
    name: "Sajeer Saju",
    rating: 5,
    quote:
      "Good service, excellent work. The greatest dishes are served with simplicity — really, I like it.",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">Reviews</p>
          <h2 id="testimonials-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            What our customers say
          </h2>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso"
          >
            <Star size={15} className="fill-saffron text-saffron" />
            Rated {site.rating.toFixed(1)} from {site.reviews} reviews on Google
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
                    <span className="block font-sans text-xs text-muted">Google review</span>
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
