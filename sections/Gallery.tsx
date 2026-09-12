"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import Lightbox from "@/components/Lightbox";
import { galleryImages, galleryVideos, gallerySettings } from "@/config/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null); // lightbox index
  const [photo, setPhoto] = useState(0); // big photo-card index
  const [slide, setSlide] = useState(0); // video index
  // Every video is press-to-play — nothing autoplays; a clip only mounts/plays after a click.
  const [played, setPlayed] = useState<Set<number>>(() => new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const total = galleryVideos.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);
  const play = (i: number) => setPlayed((p) => new Set(p).add(i));

  // Big photo card: show one image at a time, auto-swapping with a 0.8s crossfade.
  // Paused while the lightbox is open.
  useEffect(() => {
    if (active !== null) return;
    const id = setInterval(() => setPhoto((p) => (p + 1) % galleryImages.length), 3200);
    return () => clearInterval(id);
  }, [active]);

  // Only the video on the current slide should be playing; pause the others.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === slide && played.has(i)) v.play().catch(() => {});
      else v.pause();
    });
  }, [slide, played]);

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

        {/* PHOTOS — quote on the left, image on the right (desktop) */}
        <Reveal className="mt-12" delay={0.05}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 max-w-md lg:order-1 lg:justify-self-center">
              <p className="eyebrow text-muted">Photos</p>
              <blockquote className="display mt-4 text-espresso" style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}>
                &ldquo;Every plate, petal and place setting — styled by hand.&rdquo;
              </blockquote>
              <p className="body-copy mt-4">
                A closer look at the spreads, stages and tables we create on the day — tap any photo to see it full-size.
              </p>
            </div>
            <div className="order-1 lg:order-2">
          <button
            onClick={() => setActive(photo)}
            aria-label="Open photo gallery"
            className="group relative mx-auto block w-full max-w-md overflow-hidden rounded-brand bg-sand ring-1 ring-espresso/10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]"
            style={{ aspectRatio: "4 / 5" }}
          >
            {galleryImages.map((item, i) => (
              <Img
                key={item.src}
                src={item.src}
                alt={item.alt}
                fallbackSeed={item.src}
                className="absolute inset-0 h-full w-full object-contain"
                style={{
                  opacity: i === photo ? 1 : 0,
                  transition: `opacity ${gallerySettings.videoTransitionSeconds}s ease-in-out`,
                }}
              />
            ))}
            <span className="pointer-events-none absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ivory/85 text-espresso opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 size={18} />
            </span>
          </button>

          {/* Caption for the current photo */}
          <p className="mx-auto mt-4 max-w-md text-center font-sans text-sm text-ink/80">
            {galleryImages[photo].alt}
          </p>

          {/* Dots — jump to any photo */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === photo}
                onClick={() => setPhoto(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === photo ? "w-6 bg-saffron" : "w-2 bg-espresso/25 hover:bg-espresso/45"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-center font-sans text-xs text-muted">Tap the photo to view it full-size</p>
            </div>
          </div>
        </Reveal>

        {/* VIDEOS — video on the left, quote on the right (desktop) */}
        <Reveal className="mt-16" delay={0.1}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="w-full">
              <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-brand bg-sand">
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
                          controls
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
              </div>

              {/* Controls sit BELOW the reel so they clearly read as "go to next video" */}
              {total > 1 && (
                <div className="mt-5 flex items-center justify-center gap-5">
                  <button
                    aria-label="Previous video"
                    onClick={() => go(-1)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-sand text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron hover:bg-[var(--saffron-soft)]"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
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

                  <button
                    aria-label="Next video"
                    onClick={() => go(1)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-sand text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron hover:bg-[var(--saffron-soft)]"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              <p className="mt-3 text-center font-sans text-xs text-muted">
                Use the arrows to browse · tap a clip to play with sound
              </p>
            </div>
            <div className="max-w-md lg:justify-self-center">
              <p className="eyebrow text-muted">Videos</p>
              <blockquote className="display mt-4 text-espresso" style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)" }}>
                &ldquo;Don&apos;t just imagine it — press play.&rdquo;
              </blockquote>
              <p className="body-copy mt-4">
                Real weddings, receptions and functions across Malappuram — hit play and watch the day come to life.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox items={galleryImages} index={active} onClose={() => setActive(null)} onNav={setActive} />
    </section>
  );
}
