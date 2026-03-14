"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
  useGSAP(() => {
      gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 },
        );
        const projects = [
          project1Ref.current,
          project2Ref.current,
          project3Ref.current,
        ];
      
        projects.forEach((project, index) => {
          gsap.fromTo(
            project,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.3 * (index + 1),
              scrollTrigger: { trigger: project, start: "top bottom -=100" },
            },
          );
        });
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase overflow-x-hidden">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content ">
              <h2>
                Financial market analysis made simple with a powerful, user-friendly app
                called Kaizen Insights
              </h2>
              <p className="text-red-100 md:text-xl">
                An app built with React.js, Next.js, & Tailwind CSS for a fast,
                user-friendly experiences.
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Management" />
              </div>
              <h2>Music Producer Store & Portfolio</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>Benaiah Security - A visitor management platform.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
