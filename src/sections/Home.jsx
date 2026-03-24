// src/sections/Home.jsx
import Section from "../components/Section";

export default function Home() {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="home">
      <h1 className="
        text-4xl sm:text-5xl font-extrabold mb-4
        text-purple-600 dark:text-white
        drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
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
          className="
            px-5 py-2 text-sm rounded-lg
            bg-purple-600 text-white border border-purple-600
            hover:bg-white hover:text-purple-600 hover:border-purple-600
            dark:bg-white dark:text-black dark:border-white
            dark:hover:bg-purple-600 dark:hover:text-white
          "
        >
          View Experience
        </button>

        <button
          onClick={() => goTo("contact")}
          className="
            px-5 py-2 text-sm rounded-lg
            bg-purple-600 text-white border border-purple-600
            hover:bg-white hover:text-purple-600 hover:border-purple-600
            dark:bg-white dark:text-black dark:border-white
            dark:hover:bg-purple-600 dark:hover:text-white
          "
        >
          Contact
        </button>

      </div>
    </Section>
  );
}
