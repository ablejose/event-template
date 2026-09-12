import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Process from "@/sections/Process";
import About from "@/sections/About";
import InstagramCta from "@/sections/Instagram";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

/**
 * Page order follows the AIDA conversion journey:
 *  Hero (Attention) -> TrustBar (instant credibility) -> Services (Interest,
 *  "what we do") -> Gallery (Desire, real event work) -> Process (Process Trust,
 *  "how we work") -> About + Google reviews -> Instagram (more real work) ->
 *  Testimonials (Social proof) -> Contact (Action).
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <Process />
      <About />
      <InstagramCta />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
