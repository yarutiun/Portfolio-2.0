import SkillCard from "./ui/SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "Front-end",
      desc: "I specialize in crafting beautiful and user-friendly interfaces using modern technologies like React, TypeScript, and Tailwind CSS.",
      icon: "/.png",
    },
    {
      name: "Back-end",
      desc: "I have experience building robust server-side applications using Node.js, Express, and PostgreSQL.",
      icon: "/.png",
    },
    {
      name: "UI/UX",
      desc: "I have a keen eye for design and a passion for creating intuitive user experiences using Figma and Excalidraw.",
      icon: "/UIUX.png",
    },
    {
      name: "DevOps",
      desc: "I have a basic understanding of DevOps practices and tools like Docker, GitHub actions, AWS Lambda.",
      icon: "/.png",
    },
  ];
  return (
    <main id="skills" className="py-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-5xl mb-4">Skills</h1>
        <p className="text-lg max-w-3xl text-gray-600">
          Here&apos;s a showcase of the skills I&apos;ve honed through both hands-on work
          experience and dedicated learning. From technical expertise to
          problem-solving abilities, each card represents a step in my journey
          as a developer. Click on a card to explore some of the most impactful
          projects that highlight this skill in action!
        </p>
        <section className="flex justify-between pt-24 gap-16">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              desc={skill.desc}
              icon={skill.icon}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Skills;
