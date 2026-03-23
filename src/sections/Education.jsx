import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        <li>
          <div className="font-semibold">B.Sc. in Computer Science</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">University Name • 20XX–20XX</div>
        </li>
      </ul>
    </Section>
  );
}