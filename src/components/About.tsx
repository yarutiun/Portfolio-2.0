import user from "/user.jpg";

const About = () => {
  const skills = [
    { name: "Front-end", level: 90 },
    { name: "Back-end", level: 70 },
    { name: "UI/UX", level: 80 },
    { name: "DevOps", level: 55 },
  ];

  return (
    <section className="flex shrink justify-center gap-40" id="about">
      <aside>
        <img
          className="w-full max-w-sm sm:max-w-[300px] h-auto rounded-3xl object-contain"
          src={user}
          alt="Yura Photo"
        />
      </aside>
      <div>
        <h1 className="font-semibold text-4xl">About Me</h1>
        <p className="text-md text-gray-600">
          A passionate Full Stack Developer with experience in building dynamic,
          <br /> user-friendly web applications. Skilled in modern technologies like:
          <br /> JavaScript, TypeScript, React, Node.js, Express, and PostgreSQL
          <br /> I craft full-stack solutions tailored to user needs
        </p>
        <div className="my-3 space-y-3">
          {skills.map((skill) => (
            <div key={skill.name}>
              <label className="block font-medium mb-1">{skill.name}</label>
              <div className="w-full bg-gray-200 rounded h-3">
                <div
                  className="bg-orange-500 h-3 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
