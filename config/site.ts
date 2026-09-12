/**
 * Business config for Madeena Catering & Event Management, Perintalmanna.
 * All details verified from the business's Google Business Profile.
 */
export const site = {
  name: "Madeena Catering",
  fullName: "Madeena Catering & Event Management",
  tagline: "Weddings & events, catered with care.",
  city: "Perintalmanna, Kerala",
  area: "Thelakkad",
  phone: "+91 94951 63651",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919495163651", // digits only
  address: "Opposite Panchayath Office, Thelakkad, Perintalmanna, Malappuram, Kerala 679325",
  serviceAreas: ["Perintalmanna", "Mankada", "Melattur", "Angadipuram", "Malappuram"],
  rating: 5.0,
  reviews: 20,
  hours: "Open 24 hours · all days",
  delivery: true,
  mapsLink: "https://share.google/kQWrsDqbfc63ntrxw",
  mapEmbed: "https://www.google.com/maps?q=11.019036,76.279299&z=15&output=embed",
  url: "https://www.madeenaevents.in",
  // Business Instagram profile: @madeena_catering.
  instagram: "https://www.instagram.com/madeena_catering/",
} as const;

export const DEFAULT_WA_MESSAGE =
  "Hi Madeena Catering, I'd like an enquiry for an event. Date: [date], Guests: [guests].";

export const waLink = (text: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${site.phone.replace(/\s+/g, "")}`;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#gallery" },
  { label: "How we work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
