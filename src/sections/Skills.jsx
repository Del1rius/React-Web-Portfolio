// src/sections/Skills.jsx
import Section from "../components/Section";

export default function Skills() {
  const skills = [
    // TOP ROW
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/96/html-5.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/96/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/96/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/96/typescript.png",
    },

    // BOTTOM ROW
    {
      name: "Vue.js",
      icon: "https://img.icons8.com/color/96/vue-js.png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/96/react-native.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/96/python.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/96/mysql-logo.png",
    },
  ];

  return (
    <Section id="skills" title="Skills">
      <ul className="grid grid-cols-4 gap-8 max-w-5xl mx-auto mt-10">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="
              flex flex-col items-center justify-center
              px-6 py-8 rounded-xl
              border border-purple-400 text-purple-700
              bg-purple-50 dark:bg-white/10 dark:text-white dark:border-purple-600
              hover:shadow-[0_0_18px_rgba(168,85,247,0.6)]
              transition-all duration-300
            "
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
