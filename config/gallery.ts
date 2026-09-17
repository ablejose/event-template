/** DERIVED — the client's own photos/videos, resolved against media.base. */
import { event } from "@/event.config";
import { templateCopy } from "@/config/template";
import { asset } from "@/lib/copy";

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

/** OUR WORK — images. Personal event photos only (public/events/<slug>/...). */
export const galleryImages: GalleryItem[] = event.media.gallery.map((g) => ({
  src: asset(g.src),
  alt: g.alt,
}));

/** OUR WORK — videos. Personal clips only, each with a poster frame. */
export const galleryVideos: GalleryVideo[] = event.media.videos.map((v) => ({
  src: asset(v.src),
  poster: asset(v.poster),
  alt: v.alt,
}));

/** About-section crossfade pair. */
export const aboutImages: GalleryItem[] = event.media.about.map((a) => ({
  src: asset(a.src),
  alt: a.alt,
}));

export const gallerySettings = templateCopy.gallerySettings;
