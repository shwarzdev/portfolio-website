import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
