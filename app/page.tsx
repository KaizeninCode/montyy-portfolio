import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCards from "./sections/FeatureCards";


const Home = () => {
  return (
    <main className="scroll-snap-y scroll-snap-mandatory min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
      {/* <About /> */}
      {/* <Skills /> */}
    </main>
  );
};

export default Home;
