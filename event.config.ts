/**
 * ============================================================
 *  THE ONE FILE TO SWAP.
 * ============================================================
 * Point this at the event you are building. Everything else —
 * pages, SEO, schema.org, manifest, icons, WhatsApp links, media —
 * follows from it.
 *
 *   1. copy events/_new-event.config.ts -> events/<slug>.config.ts
 *   2. drop their photos/videos in     -> public/events/<slug>/
 *   3. change the two lines below.
 *
 * Nothing else in the repo needs to change between events.
 *
 * Available events:
 *   demo     -> events/demo.config.ts     (dummy data; what the hosted preview shows)
 *   madeena  -> events/madeena.config.ts  (Madeena Catering, Perintalmanna)
 */
import { demo } from "@/events/demo.config";

export const event = demo;

export default event;
