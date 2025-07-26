import { skills } from "../constants/skills";

const Skills = () => {
  return (
    <section className="w-full flex justify-center items-center py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-hard rounded-lg shadow-lg flex flex-col items-center p-8 text-center h-full min-h-[220px]"
          >
            <div className="mb-4">
              <img src={skill.icon} alt={skill.title} className="w-16 h-16 object-contain mx-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white font-geist">{skill.title}</h3>
            <p className="text-gray-200 text-base font-geist-light">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 