'use client'
import React from "react";
import HeroExperience from "../components/HeroExperience";
import Button from "../components/Button";
import {words} from '../constants/index'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 1, duration: 1.5, ease: "power2.inOut" },
    );
  });
  return (
    <section
      id="hero"
      className="relative flex-1 w-screen flex flex-col items-center justify-center h-screen scroll-snap-start"
    >
      <HeroExperience />
      <header className="flex flex-col md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7 ">
            <div className="hero-text mx-auto">
              <h1>
                Shaping
                <span className="slide mr-auto">
                  <span className="wrapper">
                    {words.map((word, i) => (
                      <span
                        key={i}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-red-300"
                        />
                        <span className='text-red-300'>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                 
              </h1>
              <h1>Into Real Projects</h1>
              <h1>That Deliver Results</h1>
            </div>
            
          </div>
        </header>
    </section>
  );
};

export default Hero;
