import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/config/site";

/**
 * PROCESS TRUST — "How we work".
 * Turns "they make beautiful events" into "they have a system for delivering them".
 * Steps describe Madeena's actual catering + event-management flow (menu, décor,
 * logistics, fresh cooking, on-ground service). Do not add capabilities the
 * business does not actually offer.
 */
const steps = [
  {
    n: "01",
    title: "Understand",
    text: "We start with your date, guest count, venue and the kind of day you have in mind.",
  },
  {
    n: "02",
    title: "Menu & concept",
    text: "We shape the menu and the look — buffet spread, live counters, stage and floral décor.",
  },
  {
    n: "03",
    title: "Plan & coordinate",
    text: "We lock quantities, timeline, staffing and logistics so nothing is left to the last minute.",
  },
  {
    n: "04",
    title: "Cook fresh & set up",
    text: "Food is cooked fresh on the day while our team sets up counters, seating and décor.",
  },
  {
    n: "05",
    title: "Serve & manage",
    text: "Trained crew serve hot and keep the day running — so you get to enjoy the occasion.",
  },
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-espresso py-16 md:py-24">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow text-saffron">How we work</p>
          <h2
            id="process-heading"
            className="display mt-4 max-w-3xl text-ivory"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
          >
            One team, from the first message to the last plate.
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/70">
            Catering and event management handled together, by one team — so the food, the décor and
            the day all run as one.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-brand border border-ivory/12 bg-ivory/12 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col bg-espresso p-6 md:p-7">
                <span className="font-display text-3xl text-saffron">{s.n}</span>
                <span className="mt-4 h-px w-8 bg-saffron/50" />
                <h3 className="mt-4 font-display text-xl text-ivory">{s.title}</h3>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-ivory/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={waLink()} variant="whatsapp" external>
              <WhatsAppIcon size={18} /> Plan your event
            </Button>
            <p className="font-sans text-sm text-ivory/60">
              Tell us your date and guest count — we&apos;ll reply with a menu and a clear quote.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
