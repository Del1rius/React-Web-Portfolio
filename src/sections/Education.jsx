// src/sections/Education.jsx
import Section from "../components/Section";

export default function Education() {
  const items = [
    {
      title: "Life Choices Coding Academy",
      detail: "Full Stack Web Development",
      period: "2023",
    },
    {
      title: "Groote Schuur High School",
      detail: "Matric (Bachelor's Pass)",
      period: "2021",
    },
  ];

  return (
    <Section id="education" title="Education">
      <ul className="space-y-5 max-w-xl mx-auto">
        {items.map((ed, i) => (
          <li key={i} className="p-4 rounded-xl border border-purple-300 dark:border-slate-800">
            <div className="font-semibold">{ed.title}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{ed.detail}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{ed.period}</div>
          </li>
        ))}
      </ul>
      <p className="sr-only">
        Education details based on CV. [1](https://redacademyza-my.sharepoint.com/personal/timothy_barry_redacademy_co_za/Documents/Microsoft%20Teams%20Chat%20Files/Timothy%20Barry%20CV%201.pdf)
      </p>
    </Section>
  );
}