import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Skills from "./sections/Skills";

const Home = () => {
  return (
    <main className="scroll-snap-y scroll-snap-mandatory min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Showcase />
      {/* <About /> */}
      {/* <Skills /> */}
    </main>
  );
};

export default Home;
