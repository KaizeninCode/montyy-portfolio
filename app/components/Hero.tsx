import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex-1 max-w-5xl mx-auto flex flex-col items-center justify-center"
    >
      <h1 className="lg:text-7xl text-4xl text-center font-extrabold font-baskerville">
        Modern developer,{" "}
        <span className="text-yellow-400">Modern solutions.</span>
      </h1>
      <h4 className="font-baskerville text-center lg:text-4xl text-xl mt-8">
        Bridging the gap between businesses and clients through innovative
        technology.
      </h4>
      <hr className='border border-yellow-400 w-3/5 mx-32 my-8'/>
    </section>
  );
};

export default Hero;
