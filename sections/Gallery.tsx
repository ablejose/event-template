"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import Lightbox from "@/components/Lightbox";
import { galleryImages, galleryVideos, gallerySettings } from "@/config/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null); // lightbox index
  const [slide, setSlide] = useState(0);
  // The first video plays on open; the rest are only mounted/played after a click.
  const [played, setPlayed] = useState<Set<number>>(() => new Set([0]));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const total = galleryVideos.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);
  const play = (i: number) => setPlayed((p) => new Set(p).add(i));

  // Only the video on the current slide should be playing; pause the others.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === slide && played.has(i)) v.play().catch(() => {});
      else v.pause();
    });
  }, [slide, played]);

  // Duplicate the image set so the right-to-left strip loops seamlessly.
  const strip = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 id="gallery-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            Imagine your event like this
          </h2>
          <p className="body-copy mt-4 max-w-xl">
            Real weddings and functions we&apos;ve catered and styled across Malappuram — the spreads,
            the stage and the crowd on the day.
          </p>
        </Reveal>

        {/* IMAGES — auto-scrolling right to left */}
        <Reveal className="mt-12" delay={0.05}>
          <p className="eyebrow mb-4 text-muted">Photos</p>
          <div
            className="marquee-viewport relative overflow-hidden rounded-brand"
            style={{
              maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            }}
          >
            <ul
              className="marquee-track flex w-max gap-4"
              style={{ ["--marquee-duration" as any]: `${gallerySettings.imageScrollSeconds}s` }}
            >
              {strip.map((item, i) => (
                <li key={`${item.src}-${i}`} className="shrink-0">
                  <button
                    onClick={() => setActive(i % galleryImages.length)}
                    aria-label={`Open image: ${item.alt}`}
                    className="group relative block overflow-hidden rounded-brand"
                    style={{ width: "clamp(240px, 34vw, 380px)", aspectRatio: "16 / 10" }}
                  >
                    <Img
                      src={item.src}
                      alt={item.alt}
                      fallbackSeed={item.src}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left font-sans text-sm text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.alt}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* VIDEOS — portrait reels; first autoplays, others load on click behind a poster */}
        <Reveal className="mt-14" delay={0.1}>
          <p className="eyebrow mb-4 text-muted">Videos</p>
          <div className="relative mx-auto w-full max-w-[330px] overflow-hidden rounded-brand bg-espresso">
            <div
              className="flex"
              style={{
                transform: `translateX(-${slide * 100}%)`,
                transition: `transform ${gallerySettings.videoTransitionSeconds}s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {galleryVideos.map((v, i) => (
                <div key={`${v.src}-${i}`} className="relative w-full shrink-0" style={{ aspectRatio: "9 / 16" }}>
                  {played.has(i) ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      className="h-full w-full object-cover"
                      autoPlay
                      muted={i === 0}
                      loop={i === 0}
                      controls={i !== 0}
                      playsInline
                      preload="auto"
                      poster={v.poster}
                      aria-label={v.alt}
                    >
                      <source src={v.src} type="video/mp4" />
                    </video>
                  ) : (
                    <button
                      onClick={() => play(i)}
                      aria-label={`Play video: ${v.alt}`}
                      className="group relative block h-full w-full"
                    >
                      <Img src={v.poster!} alt={v.alt} fallbackSeed={v.src} className="h-full w-full object-cover" />
                      <span className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/10" />
                      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory/90 text-espresso shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105">
                        <Play size={26} className="ml-0.5" fill="currentColor" />
                      </span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {total > 1 && (
              <>
                <button
                  aria-label="Previous video"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-ink/40 text-ivory backdrop-blur transition-colors hover:bg-ink/60"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  aria-label="Next video"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-ink/40 text-ivory backdrop-blur transition-colors hover:bg-ink/60"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2">
              {galleryVideos.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to video ${i + 1}`}
                  aria-current={i === slide}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slide ? "w-6 bg-saffron" : "w-2 bg-espresso/25 hover:bg-espresso/45"
                  }`}
                />
              ))}
            </div>
          )}
          <p className="mt-2 text-center font-sans text-xs text-muted">Tap a clip to play with sound</p>
        </Reveal>
      </div>

      <Lightbox items={galleryImages} index={active} onClose={() => setActive(null)} onNav={setActive} />
    </section>
  );
}
