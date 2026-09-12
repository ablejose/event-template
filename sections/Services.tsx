import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import { services } from "@/config/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            Catering &amp; complete event management
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={s.id} delay={i * 0.1} className="h-full">
                <article
                  tabIndex={0}
                  className="group relative block h-full overflow-hidden rounded-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <Img
                    src={s.image}
                    alt={s.title}
                    fallbackSeed={s.image}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Base label — always readable, fades out on hover (desktop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-opacity duration-300 lg:opacity-100 lg:group-hover:opacity-0">
                    <span className="font-display text-2xl text-saffron">{num}</span>
                    <h3 className="mt-1 font-display text-2xl text-saffron">{s.title}</h3>
                  </div>

                  {/* Detail panel — golden writing on a dark overlay; revealed on hover (always shown on mobile) */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-espresso/95 p-6 opacity-100 transition-all duration-300 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100">
                    <span className="font-display text-xl text-saffron">{num}</span>
                    <h3 className="mt-1 font-display text-2xl text-saffron">{s.title}</h3>
                    <p className="mt-3 font-sans text-sm font-light leading-relaxed text-[#ecd4a3]">{s.blurb}</p>
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 font-sans text-sm text-saffron">
                          <span className="mt-1 text-saffron">◆</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
