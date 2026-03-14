import React from "react";

const Skills = () => {
  const technologies = [
    {
      frontend: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Angular",
      ],
    },
    {
      backend: [
        "Node.js",
        "Express.js",
        "Flask",
        "TypeScript",
        "JavaScript",
        "Python",
      ],
    },
    {
      web: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Angular",
      ],
    },
    {
      mobile: ["Flutter", "Dart", "NativeWind", "React Native"],
    },
  ];
  return (
    <section
      id="skills"
      className="flex-1 max-w-5xl gap-4 mx-auto w-screen flex flex-col justify-center items-center font-bitter rounded-3xl h-screen scroll-snap-start"
    >
      <div className="flex justify-center items-center mt-8">
        <div className="grid md: grid-cols-6 lg:grid-cols-12 gap-4">
          <div className="col-span-3 bg-white/10 rounded-xl  h-full p-4">
            <h1 className="text-4xl font-extrabold text-center">Frontend</h1>
            <ul className="list-disc ml-8 mt-4">
              {technologies[0].frontend!.map((tech, i) => (
                <li key={i} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 bg-white/10 rounded-xl  h-full p-4">
            <h1 className="text-4xl font-extrabold text-center">Backend</h1>
            <ul className="list-disc ml-8 mt-4">
              {technologies[1].backend!.map((tech, i) => (
                <li key={i} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 bg-white/10 rounded-xl  h-full p-4">
            <h1 className="text-4xl font-extrabold text-center">Web</h1>
            <ul className="list-disc ml-8 mt-4">
              {technologies[2].web!.map((tech, i) => (
                <li key={i} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 bg-white/10 rounded-xl  h-full p-4">
            <h1 className="text-4xl font-extrabold text-center">Mobile</h1>
            <ul className="list-disc ml-8 mt-4">
              {technologies[3].mobile!.map((tech, i) => (
                <li key={i} className="text-lg">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border border-yellow-400 w-3/5 mx-32 my-8" />
    </section>
  );
};

export default Skills;
