import { useState } from "react";
import ProjectCard from "./ui/ProjectsCard";
import hog from "/hedgehog.jpeg"

const Projects = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const buttons = ["Front-end", "Back-end", "Full-stack"];

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <article>
      <main id="projects" className="py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-semibold text-5xl mb-4">Projects</h1>
          <p className="text-lg max-w-3xl text-gray-600">
            Explore my featured projects, showcasing the practical application
            of my skills in React, Node.js, Express, PostgreSQL, and more. Each
            project reflects my dedication to creating clean, efficient, and
            user-centered solutions. Dive in to see the real-world impact of my
            work!
          </p>
        </div>
        <div className="flex justify-center space-x-4 py-10">
          {buttons.map((label, index) => (
            <button
              key={label}
              onClick={() => handleButtonClick(index)}
              className={`px-4 py-2 rounded-md ${
                activeButton === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-400 hover:text-white transition duration-200`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-14">
            <ProjectCard name="Ananas" description="Lorem ipsum dolor sit amet" image={hog} link="http://google.com"/>
            <ProjectCard name="Ananas" description="Lorem ipsum dolor sit amet" image={hog} link="http://google.com"/>
            <ProjectCard name="Ananas" description="Lorem ipsum dolor sit amet" image={hog} link="http://google.com"/>
            <ProjectCard name="Ananas" description="Lorem ipsum dolor sit amet" image={hog} link="http://google.com"/>
        </div>
      </main>
    </article>
  );
};

export default Projects;
