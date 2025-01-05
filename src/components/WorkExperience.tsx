import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

// Enhanced Work Experience Component
const WorkExperience = () => {
  const experiences = [
    {
      company: "Volkswagen",
      role: "Frontend Developer Intern",
      date: "March 2024 - February 2025",
      description:
        "Contributed to the development of internal tools using React and TypeScript. Optimized UI/UX workflows and implemented responsive designs.",
    },
    {
      company: "42 Wolfsburg",
      role: "Student",
      date: "March 2022 - March 2024",
      description:
        "Immersed myself in a rigorous, peer-driven coding curriculum, mastering problem-solving, collaborative programming, and self-directed learning. Tackled diverse projects, ranging from algorithm development to full-stack web applications, honing my skills in languages like C and JavaScript while building a strong foundation in software engineering and teamwork.",
    },
    {
      company: "Ucode Academy",
      role: "Student",
      date: "2021 - 2022",
      description:
        "Gained hands-on experience through project-based learning, developing real-world software and refining my coding, debugging, and teamwork skills, preparing me for industry challenges.",
    },
    {
      company: "CodeCademy",
      role: "Certification Programs",
      date: "2022 - 2025",
      description:
        "Completed Codecademy certifications in Full-Stack Development (React, Redux, Express, PostgreSQL), Advanced React, UI/UX Design, and Agile Practices, gaining a comprehensive skill set for modern web development and design.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-5xl mb-4 text-black">Work Experience & Learning</h1>
        <p className="text-lg max-w-3xl text-gray-600 mb-12">
          A showcase of my professional roles, responsibilities, and achievements throughout my career.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto mt-12 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Stagger the animations
            data-aos-duration="1000"
            
          >
            {/* Timeline Dot */}
            <div className="w-16 h-16 bg-gradient-to-r from-orange-300 to-orange-500 text-white flex-shrink-0 flex items-center justify-center rounded-full shadow-lg transform transition-all hover:scale-110">
              <span className="text-xl">{index + 1}</span>
            </div>
            {/* Experience Content */}
            <div className="p-6 bg-white shadow-xl rounded-lg w-full">
              <h2 className="font-bold text-2xl text-blue-600">{exp.role}</h2>
              <h3 className="text-lg text-gray-800">{exp.company}</h3>
              <p className="text-sm text-gray-500 mt-1">{exp.date}</p>
              <p className="text-gray-700 mt-4">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;