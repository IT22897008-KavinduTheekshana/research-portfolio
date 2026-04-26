import CosmicBackground from "@/components/CosmicBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Domain from "@/components/Domain";
import Performance from "@/components/Performance";
import Milestones from "@/components/Milestones";
import Documents from "@/components/Documents";
import Slides from "@/components/Slides";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Animations from "@/components/Animations";

export default function Home() {
  return (
    <>
      <CosmicBackground />
      <Navbar />
      <div className="page-content">
        <Hero />
        <AboutIntro />
        <Domain />
        <Performance />
        <Milestones />
        <Documents />
        <Slides />
        <Team />
        <Contact />
        <Footer />
      </div>
      <Animations />
    </>
  );
}
