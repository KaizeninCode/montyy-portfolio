import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import LogoSection from "./sections/LogoSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


const Home = () => {
  return (
    <main className="scroll-snap-y scroll-snap-mandatory min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <Experience />
      <LogoSection />
      <Contact />
      <Footer />
      
    </main>
  );
};

export default Home;
