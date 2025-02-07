import SkillCard from "./ui/SkillCard";
import back from '/back.svg';
import front from '/frontend.svg';
import devops from '/devops.svg';
import ui from '/ui.svg';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';


const Skills = () => {
  const skills = [
    {
      name: "Front-end",
      desc: "I specialize in crafting beautiful and user-friendly interfaces using modern technologies like React, TypeScript, and Tailwind CSS.",
      icon: front,
    },
    {
      name: "Back-end",
      desc: "I have experience building robust server-side applications using Node.js, Express, and PostgreSQL.",
      icon: back,
    },
    {
      name: "UI/UX",
      desc: "I have a keen eye for design and a passion for creating intuitive user experiences using Figma and Excalidraw.",
      icon: ui,
    },
    {
      name: "DevOps",
      desc: "I have a basic understanding of DevOps practices and tools like Docker, GitHub actions, AWS Lambda.",
      icon: devops,
    },
  ];
  return (
    <main id="skills" className="py-20">
      <div className="flex flex-col flex-wrap flex-shrink-1 flex-grow-1 items-center text-center">
        <h1 className="font-semibold text-5xl mb-4">Skills</h1>
        <p className="text-lg max-w-3xl text-gray-600">
          Here&apos;s a showcase of the skills I&apos;ve honed through both hands-on work
          experience and dedicated learning. From technical expertise to
          problem-solving abilities, each card represents a step in my journey
          as a developer. Click on a card to explore some of the most impactful
          projects that highlight this skill in action!
        </p>
        <section className="flex justify-between pt-24 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-aos="fade-right"
              data-aos-delay={index * 100} // Stagger the animations
              data-aos-duration="1000"
            >
              <SkillCard
                key={skill.name}
                name={skill.name}
                desc={skill.desc}
                icon={skill.icon}
              />
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Skills;
