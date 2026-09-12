"use client";

import { useEffect, useState } from "react";
import { Star, Clock, Truck, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import { site } from "@/config/site";

// About feature image pair — auto-swaps with a 0.8s crossfade.
const aboutImages = [
  { src: "/images/madeena-photo-1.webp", alt: "Grand indoor banquet set with gold chairs and chandelier, styled by Madeena" },
  { src: "/images/madeena-photo-2.webp", alt: "Outdoor evening banquet with floral table styling by Madeena" },
];

export default function About() {
  const points = [
    { icon: Star, text: `${site.rating.toFixed(1)}\u2605 on Google (${site.reviews} reviews)` },
    { icon: Clock, text: "Open 24 hours, all days" },
    { icon: Truck, text: "Delivery available" },
    { icon: MapPin, text: "Serving Perintalmanna & Malappuram" },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % aboutImages.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">About us</p>
            <h2 id="about-heading" className="display mt-4" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)" }}>
              Feasts and functions, handled with{" "}
              <span className="italic" style={{ color: "var(--saffron)" }}>
                care.
              </span>
            </h2>
            <span className="my-5 block h-px w-16" style={{ background: "var(--saffron)" }} />
            <p className="body-copy">
              Madeena Catering &amp; Event Management is based in Thelakkad, Perintalmanna. From
              weddings and receptions to house functions and inaugurations, we handle the whole
              day — fresh food and buffets, live counters, floral and stage décor, and on-ground
              coordination. Cooked fresh, served hot, and managed so you can enjoy the occasion.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-3 font-sans text-sm text-ink/85">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2">
                    <p.icon size={16} />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso"
            >
              <Star size={15} className="fill-saffron text-saffron" /> Read our {site.reviews} reviews on Google
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="relative overflow-hidden rounded-brand" style={{ aspectRatio: "4 / 5" }}>
            {aboutImages.map((im, i) => (
              <Img
                key={im.src}
                src={im.src}
                alt={im.alt}
                fallbackSeed={im.src}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity: i === idx ? 1 : 0, transition: "opacity 0.8s ease-in-out" }}
              />
            ))}
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
