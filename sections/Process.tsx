"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { waLink } from "@/config/site";

/**
 * PROCESS TRUST — "How we work".
 * White background, golden headings.
 * Desktop: when the row scrolls into view, a black fill sweeps left-to-right
 * across the connecting line while the number badges turn black in sequence.
 * Mobile: each number badge turns black as its own step scrolls into view, so
 * the animation plays with the scroll. Steps describe Madeena's actual catering
 * + event-management flow; do not add capabilities the business does not offer.
 */
const steps = [
  { n: "01", title: "Understand", text: "We start with your date, guest count, venue and the kind of day you have in mind." },
  { n: "02", title: "Menu & concept", text: "We shape the menu and the look — buffet spread, live counters, stage and floral décor." },
  { n: "03", title: "Plan & coordinate", text: "We lock quantities, timeline, staffing and logistics so nothing is left to the last minute." },
  { n: "04", title: "Cook fresh & set up", text: "Food is cooked fresh on the day while our team sets up counters, seating and décor." },
  { n: "05", title: "Serve & manage", text: "Trained crew serve hot and keep the day running — so you get to enjoy the occasion." },
];

const STEP_DELAY = 0.45; // seconds between each number colouring black (desktop sweep)
const LINE_DURATION = (steps.length - 1) * STEP_DELAY + 0.5;

export default function Process() {
  const olRef = useRef<HTMLOListElement | null>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(() => steps.map(() => false));
  const [lineActive, setLineActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActiveSteps(steps.map(() => true));
      setLineActive(true);
      return;
    }

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    setIsDesktop(desktop);

    if (desktop) {
      // Whole-row trigger: colour every badge (staggered) and sweep the line.
      const node = olRef.current;
      if (!node) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActiveSteps(steps.map(() => true));
              setLineActive(true);
              io.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      io.observe(node);
      return () => io.disconnect();
    }

    // Mobile / tablet: colour each badge as its own step scrolls into view.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = Number((e.target as HTMLElement).dataset.idx);
          setActiveSteps((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" }
    );
    liRefs.current.forEach((li) => li && io.observe(li));
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" aria-labelledby="process-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 id="process-heading" className="display mt-4 max-w-3xl text-saffron-2" style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}>
            One team, from the first message to the last plate.
          </h2>
          <p className="body-copy mt-4 max-w-xl">
            Catering and event management handled together, by one team — so the food, the décor and
            the day all run as one.
          </p>
        </Reveal>

        <ol ref={olRef} className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Connecting line: sand base + black fill that sweeps across when in view (desktop) */}
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-sand lg:block" />
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-8 hidden h-px bg-ink lg:block"
            style={{ width: lineActive ? "100%" : "0%", transition: `width ${LINE_DURATION}s ease-out` }}
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              ref={(el) => {
                liRefs.current[i] = el;
              }}
              data-idx={i}
              className="relative"
            >
              <div className="flex flex-col items-start">
                <span
                  className={`relative z-10 grid h-16 w-16 place-items-center rounded-full border font-display text-2xl shadow-[0_14px_30px_-16px_rgba(196,137,46,0.6)] transition-all duration-500 ${
                    activeSteps[i] ? "border-ink bg-ink text-ivory" : "border-saffron bg-white text-saffron-2"
                  }`}
                  style={{ transitionDelay: isDesktop ? `${i * STEP_DELAY}s` : "0s" }}
                >
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl text-saffron-2">{s.title}</h3>
                <p className="body-copy mt-2">{s.text}</p>
              </div>
            </li>
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
