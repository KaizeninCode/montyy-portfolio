import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex-1 max-w-5xl gap-4 mx-auto w-screen flex flex-col justify-center items-center font-bitter rounded-3xl"
    >
      <div className="mx-auto p-4 text-center">
          <h4 className="lg:text-2xl">
            Hi there. I'm{" "}
            <em className="font-semibold text-yellow-400">Philip Wekullo,</em> a
            <span className="italic"> full stack web and mobile software developer</span>.
          </h4>
          <p className="lg:text-2xl mt-4 md:px-10">
            With a passion for creating seamless digital experiences, I specialize
            in crafting innovative solutions that bridge the gap between businesses
            and their clients. My expertise spans across a wide variety of
            technologies, allowing me to deliver modern solutions that drive growth
            and enhance user engagement. Whether it&apos;s developing responsive web
            applications or building intuitive mobile apps, I am dedicated to
            leveraging technology to solve real-world problems.
          </p>
      </div>
      <hr className='border border-yellow-400 w-3/5 mx-32 my-8'/>
    </section>
  );
};

export default About;
