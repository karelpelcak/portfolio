import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatBand from "@/components/StatBand";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <StatBand />
      <Timeline />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
