// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Timothy Barry. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hover:underline text-slate-700 dark:text-slate-300"
          >
            Contact
          </a>

          {/* If you add /public/resume.pdf, uncomment this: */}
          {/* <a
            href="/resume.pdf"
            className="hover:underline text-slate-700 dark:text-slate-300"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a> */}
        </div>
      </div>
    </footer>
  );
}
