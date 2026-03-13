import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <main className="scroll-snap-y scroll-snap-mandatory min-h-screen">
      <Hero />
      {/* <About /> */}
      {/* <Skills /> */}
    </main>
  );
};

export default Home;
