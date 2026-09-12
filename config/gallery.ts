export interface GalleryItem {
  src: string;
  alt: string;
  wide?: boolean;
}

export interface GalleryVideo {
  src: string;
  poster?: string;
  alt: string;
}

/**
 * OUR WORK — IMAGES.
 * Photos shown in the right-to-left auto-scrolling strip.
 * Self-hosted under /public/images (business Google profile photos).
 * (The two client event photos WA0047/WA0048 are featured as the About section's
 *  0.8s swapping pair, so they are not repeated here.)
 */
export const galleryImages: GalleryItem[] = [
  { src: "/images/g1.webp", alt: "Floral wedding stage décor by Madeena" },
  { src: "/images/g2.webp", alt: "Fresh fruit and salad buffet spread" },
  { src: "/images/g3.webp", alt: "Fresh juice welcome-drinks counter at an event" },
  { src: "/images/g6.webp", alt: "Banquet hall set for a reception" },
  { src: "/images/g5.webp", alt: "Uniformed Madeena crew serving welcome drinks" },
  { src: "/images/g4.webp", alt: "Live tea and spice welcome-drinks station" },
  { src: "/images/g7.webp", alt: "Cultural performance at a celebration" },
  { src: "/images/g8.webp", alt: "Event setup and ushers at an inauguration" },
];

/**
 * OUR WORK — VIDEOS.
 * 6 event clips, each trimmed to an 8-second highlight and web-optimised (H.264, portrait/reel).
 * Ordered best-quality / lightest-to-render first.
 * Served from /public/videos with a matching poster in /public/images.
 * (Move to Cloudinary later by swapping these src/poster URLs.)
 */
export const galleryVideos: GalleryVideo[] = [
  { src: "/videos/madeena-video-1.mp4", poster: "/images/madeena-video-1.webp", alt: "Floral wedding stage with copper buffet chafing dishes" },
  { src: "/videos/madeena-video-2.mp4", poster: "/images/madeena-video-2.webp", alt: "Guests dining at a large catered function" },
  { src: "/videos/madeena-video-3.mp4", poster: "/images/madeena-video-3.webp", alt: "Live welcome-drinks counter at an event hall" },
  { src: "/videos/madeena-video-4.mp4", poster: "/images/madeena-video-4.webp", alt: "Banquet hall set with buffet stations and dressed tables" },
  { src: "/videos/madeena-video-5.mp4", poster: "/images/madeena-video-5.webp", alt: "Uniformed Madeena service staff at a banquet venue" },
  { src: "/videos/madeena-video-6.mp4", poster: "/images/madeena-video-6.webp", alt: "Live tea and juice welcome-drinks counter" },
];

/** Motion knobs for the Our work section. */
export const gallerySettings = {
  /** Video carousel slide transition (seconds). */
  videoTransitionSeconds: 0.8,
  /** Time for one full loop of the image strip (seconds). Higher = slower. */
  imageScrollSeconds: 26,
} as const;
