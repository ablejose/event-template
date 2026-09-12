import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/config/site";

/**
 * PROCESS TRUST — "How we work".
 * Turns "they make beautiful events" into "they have a system for delivering them".
 * White background, golden (saffron) numbers/headings — a numbered stepper with a
 * connecting line on desktop. Steps describe Madeena's actual catering +
 * event-management flow; do not add capabilities the business does not offer.
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
    <section id="process" aria-labelledby="process-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2
            id="process-heading"
            className="display mt-4 max-w-3xl text-saffron-2"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
          >
            One team, from the first message to the last plate.
          </h2>
          <p className="body-copy mt-4 max-w-xl">
            Catering and event management handled together, by one team — so the food, the décor and
            the day all run as one.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Connecting line behind the number badges (desktop) */}
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-sand lg:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-saffron bg-white font-display text-2xl text-saffron-2 shadow-[0_14px_30px_-16px_rgba(196,137,46,0.6)]">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl text-saffron-2">{s.title}</h3>
                <p className="body-copy mt-2">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={waLink()} variant="whatsapp" external>
              <WhatsAppIcon size={18} /> Plan your event
            </Button>
            <p className="font-sans text-sm text-muted">
              Tell us your date and guest count — we&apos;ll reply with a menu and a clear quote.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
