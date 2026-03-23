// src/sections/Skills.jsx
import Section from "../components/Section";

export default function Skills() {
  // From CV + ensure Python and React are included
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "MySQL",
    "React",
    "Vue.js",
  ];

  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
        {skills.map((s) => (
          <li
            key={s}
            className="px-3 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-purple-800
                       dark:border-slate-700 dark:bg-white/10 dark:text-white"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="sr-only">Skills list derived from CV. [1](https://redacademyza-my.sharepoint.com/personal/timothy_barry_redacademy_co_za/Documents/Microsoft%20Teams%20Chat%20Files/Timothy%20Barry%20CV%201.pdf)</p>
    </Section>
  );
}