import Section from "../components/Section";

export default function Home() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="home">
      <div className="flex flex-col items-start gap-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Hi, I’m Timothy — Backspace Software Developer Sprinter
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          I build fast, reliable web experiences with React, TypeScript, and modern tooling.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => goTo("contact")}
            className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700"
          >
            Contact Me
          </button>
          <button
            onClick={() => goTo("experience")}
            className="rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View Experience
          </button>
        </div>
      </div>
    </Section>
  );
}