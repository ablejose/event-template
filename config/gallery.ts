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
 * Real event photos supplied by Madeena, self-hosted under /public/images.
 * Shown one at a time in the auto-crossfading photo card; tap to open full-size.
 */
export const galleryImages: GalleryItem[] = [
  { src: "/images/gallery-07.webp", alt: "Floral wedding stage and mandap styled by Madeena" },
  { src: "/images/gallery-05.webp", alt: "Banquet hall set with dressed long tables and candlelight" },
  { src: "/images/gallery-13.webp", alt: "Buffet spread with gold chafing dishes at a function" },
  { src: "/images/gallery-10.webp", alt: "Floral décor and hanging lanterns over a buffet counter" },
  { src: "/images/gallery-08.webp", alt: "Floral pillars and monogram backdrop at a reception" },
  { src: "/images/gallery-02.webp", alt: "Golden table settings laid out for a wedding feast" },
  { src: "/images/gallery-11.webp", alt: "Floral arch and lanterns above a served buffet" },
  { src: "/images/gallery-04.webp", alt: "Rose candelabra centrepiece on a banquet table" },
  { src: "/images/gallery-01.webp", alt: "Large banquet hall set for a catered reception" },
  { src: "/images/gallery-12.webp", alt: "Spacious hall set with long tables for a big function" },
  { src: "/images/gallery-03.webp", alt: "Floral wedding welcome signboard at the entrance" },
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
