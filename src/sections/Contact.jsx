// src/sections/Contact.jsx
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 max-w-xl">
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Want to collaborate or have a question? Reach out.
        </p>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <a
            href="mailto:you@example.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            you@example.com
          </a>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-slate-700 dark:text-slate-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-slate-700 dark:text-slate-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
