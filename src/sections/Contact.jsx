// src/sections/Contact.jsx
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-xl border border-purple-300 dark:border-slate-800 p-6 max-w-xl mx-auto">
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Want to collaborate or have a question? Reach out.
        </p>

        <div className="flex flex-col items-center gap-3">
          {/* Email */}
          <a
            href="mailto:timothy.aidan.barry@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            timothy.aidan.barry@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+27818093412"
            className="text-slate-700 hover:underline dark:text-slate-300"
          >
            +27 81 809 3412
          </a>

          {/* Location */}
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Lansdowne, Cape Town, South Africa
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/Del1rius"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-purple-600 hover:underline dark:text-slate-200 dark:hover:text-white"
            >
              GitHub — Del1rius
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
``