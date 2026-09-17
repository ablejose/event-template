import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import { copy, site } from "@/config/site";
import { t } from "@/lib/copy";

export default function InstagramCta() {
  if (!site.instagram) return null;

  return (
    <section id="instagram" aria-labelledby="instagram-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-brand border border-sand bg-cream px-6 py-14 text-center shadow-[0_30px_70px_-40px_rgba(36,28,21,0.35)] md:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,137,46,0.10) 0%, rgba(196,137,46,0) 70%)" }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(196,137,46,0.35), transparent)" }}
          />

          <div className="relative">
            <Reveal>
              <span className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-3xl border border-saffron/25 bg-[var(--saffron-soft)] text-saffron-2 shadow-[0_22px_54px_-26px_rgba(196,137,46,0.45)]">
                <Instagram size={38} strokeWidth={1.6} />
              </span>

              <p className="eyebrow">{copy.instagram.eyebrow}</p>
              <h2 id="instagram-heading" className="display mt-4 text-espresso" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}>
                {copy.instagram.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-ink/70">
                {t(copy.instagram.body)}
              </p>

              <div className="mt-10 flex justify-center">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.instagram.cta}
                  className="inline-flex items-center gap-2.5 rounded-full bg-saffron px-9 py-4 font-sans text-base font-semibold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--saffron-2)] hover:text-ivory hover:shadow-[0_20px_44px_-16px_rgba(196,137,46,0.55)]"
                >
                  <Instagram size={20} />
                  {copy.instagram.cta}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
