import Section from "../components/Section";

export default function Experience() {
  const items = [
    {
      role: "Software Developer",
      company: "Backspace",
      period: "202X–Present",
      bullets: [
        "Shipped performant React features, improving page speed and UX.",
        "Worked across the stack to deliver end-to-end product increments.",
      ],
    },
  ];
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-6">
        {items.map((job, i) => (
          <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{job.role} • {job.company}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{job.period}</div>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}