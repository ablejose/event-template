"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Navigation, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, waLink, telLink } from "@/config/site";

export default function Contact() {
  const [f, setF] = useState({ email: "", phone: "", address: "", message: "" });
  const on = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      "Hi Madeena Catering, I'd like to plan an event." +
      (f.message ? `\n\n${f.message}` : "") +
      (f.phone ? `\n\nPhone: ${f.phone}` : "") +
      (f.email ? `\nEmail: ${f.email}` : "") +
      (f.address ? `\nAddress: ${f.address}` : "");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const label = "font-sans text-sm font-medium text-espresso";
  const input =
    "mt-2 w-full rounded-2xl border border-sand bg-white px-4 py-3 font-sans text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-saffron";

  // Typewriter reveal for the heading — "writes" the text when the section scrolls into view.
  const headingText = "Let's plan your event together.";
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [typed, setTyped] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(headingText.length);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            io.disconnect();
            let n = 0;
            const id = setInterval(() => {
              n += 1;
              setTyped(n);
              if (n >= headingText.length) clearInterval(id);
            }, 45);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — the same event image, clean on white, with quick contact facts */}
          <Reveal className="order-2 lg:order-1">
            <div className="flex h-full flex-col">
              <figure className="relative min-h-[20rem] flex-1 overflow-hidden rounded-brand">
                <Img
                  src="/images/madeena-photo-2.webp"
                  alt="Evening banquet styled, catered and managed by Madeena"
                  fallbackSeed="madeena-contact"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </figure>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 font-sans text-sm text-ink/85">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><Star size={16} className="fill-saffron text-saffron" /></span>
                  Rated {site.rating.toFixed(1)} on Google · {site.reviews} reviews · Open 24 hours
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-ink/85">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><MapPin size={16} /></span>
                  {site.address}
                </li>
                <li className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href={telLink} className="link-underline inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso">
                    <Phone size={15} /> {site.phone}
                  </a>
                  <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso">
                    <Navigation size={15} /> Get directions
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Right — enquiry form (composes a WhatsApp message; no backend needed) */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div>
              <p className="eyebrow">Plan your event</p>
              <h2
                id="contact-heading"
                ref={headingRef}
                aria-label={headingText}
                className="display mt-4 text-saffron-2"
                style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}
              >
                <span aria-hidden="true">
                  {headingText.slice(0, typed)}
                  <span className="text-transparent">{headingText.slice(typed)}</span>
                  {typed < headingText.length && (
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block w-[0.5ch] animate-pulse bg-saffron-2 align-[-0.12em]"
                      style={{ height: "0.92em" }}
                    />
                  )}
                </span>
              </h2>
              <p className="body-copy mt-4 max-w-md">
                Share a few details and we&apos;ll pick it up on WhatsApp — with a menu and a clear quote.
              </p>

              <form onSubmit={submit} className="mt-6 rounded-brand border border-sand bg-cream p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-email" className={label}>Your Email</label>
                    <input id="c-email" type="email" value={f.email} onChange={on("email")} placeholder="you@email.com" className={input} />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className={label}>Your Phone <span className="text-saffron-2">*</span></label>
                    <input id="c-phone" type="tel" required value={f.phone} onChange={on("phone")} placeholder="Your phone number" className={input} />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="c-address" className={label}>Your Address</label>
                  <input id="c-address" type="text" value={f.address} onChange={on("address")} placeholder="Town / venue" className={input} />
                </div>
                <div className="mt-4">
                  <label htmlFor="c-message" className={label}>Message</label>
                  <textarea id="c-message" rows={4} value={f.message} onChange={on("message")} placeholder="Event type, date and guest count" className={`${input} resize-y`} />
                </div>
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-7 py-4 font-sans text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink"
                >
                  <WhatsAppIcon size={18} /> Send on WhatsApp
                </button>
                <p className="mt-3 text-center font-sans text-xs text-muted">Opens WhatsApp with your details ready to send.</p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
