// src/sections/Home.jsx
import Section from "../components/Section";

export default function Home() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="home">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Timothy Barry — Software Developer
      </h1>

      <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
        Lansdowne, Cape Town • 081 809 3412 • timothy.aidan.barry@gmail.com
      </p>

      <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8">
        Motivated and detail‑oriented Software Developer with hands‑on experience in
        front‑end and full‑stack development. Skilled in JavaScript, React, Python, and
        MySQL, focused on building clean, efficient, and scalable web applications.
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => goTo("experience")}
          className="rounded-lg bg-purple-600 text-white px-5 py-2 text-sm hover:bg-purple-700"
        >
          View Experience
        </button>
        <button
          onClick={() => goTo("contact")}
          className="rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-2 text-sm hover:bg-purple-50 dark:hover:bg-white/10"
        >
          Contact
        </button>
      </div>
    </Section>
  );
}
