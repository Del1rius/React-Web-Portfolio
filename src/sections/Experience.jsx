// src/sections/Experience.jsx
import Section from "../components/Section";

export default function Experience() {
  const items = [
    {
      role: "Software Developer",
      company: "Loop Taxi",
      location: "Cape Town",
      period: "04/2024 – 04/2025",
      bullets: [
        "Designed and implemented new features to enhance company web systems and internal efficiency.",
        "Collaborated to troubleshoot issues, optimize performance, and ensure reliable operation.",
        "Built user‑friendly interfaces with React and TypeScript to improve usability and responsiveness.",
        "Contributed to API integrations and database optimization to streamline processes.",
        "Participated in code reviews, testing, and documentation to maintain quality.",
      ],
    },
    {
      role: "Intern",
      company: "LC Studio",
      location: "Cape Town",
      period: "10/2023 – 03/2024",
      bullets: [
        "Completed a structured program focused on JavaScript, Python, and full‑stack principles.",
        "Assisted front‑end development with HTML, CSS, and Vue.js on real client projects.",
        "Practiced Git collaboration to build and debug small‑scale applications.",
        "Translated business needs into functional software components.",
        "Developed understanding of web architecture, API integration, and responsive design.",
      ],
    },
  ];

  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6 max-w-3xl mx-auto">
        {items.map((job, i) => (
          <div key={i} className="rounded-xl border border-purple-300 dark:border-slate-800 p-5 text-left">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="font-semibold">
                {job.role} • {job.company}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{job.period}</div>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{job.location}</div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="sr-only">Experience content sourced from CV. [1](https://redacademyza-my.sharepoint.com/personal/timothy_barry_redacademy_co_za/Documents/Microsoft%20Teams%20Chat%20Files/Timothy%20Barry%20CV%201.pdf)</p>
    </Section>
  );
}