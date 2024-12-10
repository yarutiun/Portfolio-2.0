import AOS from 'aos';
import 'aos/dist/aos.css'; // import styles
AOS.init(
    {
        once: true,
    }
);
import { motion } from 'framer-motion';

// Enhanced Work Experience Component
const WorkExperience = () => {
  const experiences = [
    {
      company: "Volkswagen",
      role: "Frontend Developer Intern",
      date: "Jan 2023 - Dec 2023",
      description:
        "Contributed to the development of internal tools using React and TypeScript. Optimized UI/UX workflows and implemented responsive designs.",
    },
    {
      company: "Freelance",
      role: "Frontend Developer",
      date: "2021 - 2022",
      description:
        "Developed modern websites for small businesses using React, Tailwind CSS, and Next.js. Improved website performance and SEO.",
    },
    {
      company: "Tech Solutions",
      role: "Junior Web Developer",
      date: "2020 - 2021",
      description:
        "Worked on full-stack development for various web applications. Collaborated with clients to design user-friendly interfaces and improve functionality.",
    },
    {
      company: "Digital Creators",
      role: "Intern - Web Development",
      date: "2019 - 2020",
      description:
        "Assisted with the development of dynamic websites. Focused on creating interactive UI components and optimizing performance.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-5xl mb-4 text-blue-600">Work Experience</h1>
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white flex-shrink-0 flex items-center justify-center rounded-full shadow-lg transform transition-all hover:scale-110">
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