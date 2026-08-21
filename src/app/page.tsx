import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black md:overflow-x-visible">
      <div className="relative mx-auto h-[807px] w-full max-w-[1440px] overflow-hidden md:h-[810px]">
        <Hero />
        <div className="relative z-10">
          <Header />
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
