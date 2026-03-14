import React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

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
