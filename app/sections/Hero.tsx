import React from "react";
import HeroExperience from "../components/HeroExperience";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex-1 w-screen flex flex-col items-center justify-center h-screen scroll-snap-start"
    >
      <HeroExperience />
      <div className="relative z-10 max-w-5xl pointer-events-none">
        <h1 className="lg:text-8xl text-4xl text-center font-extrabold font-baskerville text-yellow-400">
          Philip Wekullo <br />
          <span className="text-white lg:text-6xl">
            Full Stack Software Developer
          </span>
        </h1>
        <h4 className="font-baskerville text-center lg:text-4xl text-xl mt-8">
          Bridging the gap between businesses and clients through innovative
          technology.
        </h4>
      </div>
    </section>
  );
};

export default Hero;
