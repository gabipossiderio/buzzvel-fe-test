import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { People } from "@/components/sections/People";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
