import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site, waLink, telLink } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — a real event image so the closing section never feels empty */}
          <Reveal className="order-2 lg:order-1">
            <figure className="relative h-full min-h-[300px] overflow-hidden rounded-brand">
              <Img
                src="/images/madeena-photo-2.webp"
                alt="Evening banquet styled, catered and managed by Madeena"
                fallbackSeed="madeena-contact"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 font-display text-2xl text-ivory">
                Your event, handled end to end.
              </figcaption>
            </figure>
          </Reveal>

          {/* Right — the CTA + real contact mechanisms (WhatsApp / call / map) */}
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="max-w-xl">
              <p className="eyebrow">Plan your event</p>
              <h2 id="contact-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
                Let&apos;s plan your event together.
              </h2>
              <p className="body-copy mt-4 max-w-md">
                Tell us your date and guest count on WhatsApp or by phone — we&apos;ll get straight back
                with a menu and a clear quote.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={waLink()} variant="whatsapp" external>
                  <WhatsAppIcon size={18} /> WhatsApp us
                </Button>
                <Button href={telLink} variant="primary">
                  <Phone size={16} /> {site.phone}
                </Button>
              </div>
              <p className="mt-4 font-sans text-sm text-muted">
                Rated {site.rating.toFixed(1)} on Google · {site.reviews} reviews · Open 24 hours
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 font-sans text-sm text-ink/85">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><MapPin size={16} /></span>
                  {site.address}
                </li>
                <li className="flex items-center gap-3 font-sans text-sm text-ink/85">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><Clock size={16} /></span>
                  {site.hours}
                </li>
                <li>
                  <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso">
                    <Navigation size={15} /> Get directions on Google Maps
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
