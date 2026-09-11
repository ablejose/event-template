import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { services } from "@/config/services";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";
import Loader from "@/components/Loader";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

const TITLE = "Madeena Catering & Event Management — Perintalmanna, Kerala";
const DESCRIPTION =
  "Madeena Catering & Event Management in Perintalmanna, Malappuram — wedding catering, buffets, live counters and complete event management across Kerala. Rated 5.0 on Google. Open 24 hours. Call +91 94951 63651 or enquire on WhatsApp.";
const OG_DESCRIPTION =
  "Wedding catering, buffets and complete event management across Perintalmanna & Malappuram. Rated 5.0 on Google. Open 24 hours.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: "%s · Madeena Catering, Perintalmanna",
  },
  description: DESCRIPTION,
  applicationName: site.fullName,
  keywords: [
    "catering Perintalmanna",
    "wedding catering Malappuram",
    "event management Perintalmanna",
    "wedding buffet Kerala",
    "catering service Perintalmanna",
    "wedding caterers Malappuram",
    "function catering Kerala",
    "buffet catering Perintalmanna",
    "Madeena Catering",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  publisher: site.fullName,
  category: "Catering & Event Management",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.fullName,
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Madeena Catering & Event Management — Perintalmanna, Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Madeena Catering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#241C15",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Caterer", "FoodEstablishment"],
  "@id": `${site.url}/#business`,
  name: site.fullName,
  alternateName: site.name,
  description: DESCRIPTION,
  slogan: site.tagline,
  image: [`${site.url}/og-image.jpg`, `${site.url}/images/hero-poster.webp`],
  logo: `${site.url}/android-chrome-512x512.png`,
  url: site.url,
  telephone: site.phone,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  servesCuisine: ["Indian", "Kerala", "Multi-cuisine"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite Panchayath Office, Thelakkad",
    addressLocality: "Perintalmanna",
    addressRegion: "Kerala",
    postalCode: "679325",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 11.019036, longitude: 76.279299 },
  hasMap: site.mapsLink,
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  sameAs: [site.instagram],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.toFixed(1),
    reviewCount: String(site.reviews),
  },
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Loader />
        <SmoothScroll>
          <Header />
          {children}
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
