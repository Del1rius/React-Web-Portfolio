import Section from "../components/Section";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
        I’m a developer focused on performance, accessibility, and developer experience.
        I enjoy shipping pragmatic solutions with clean, maintainable code.
      </p>
    </Section>
  );
}