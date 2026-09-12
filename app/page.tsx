import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Process from "@/sections/Process";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import InstagramCta from "@/sections/Instagram";
import Footer from "@/sections/Footer";

/**
 * Page order follows the AIDA conversion journey:
 *  Hero (Attention) -> TrustBar -> Services (Interest) -> Gallery (Desire) ->
 *  Process (Process Trust) -> About -> Testimonials (Social proof) ->
 *  Contact (Action) -> Instagram (follow / more work) -> Footer.
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
      <Testimonials />
      <Contact />
      <InstagramCta />
      <Footer />
    </main>
  );
}
