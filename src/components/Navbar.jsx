import useTheme from "../hooks/useTheme.js";

const links = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Education", id: "education" },
  { label: "Work Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="font-semibold tracking-tight">
          Timothy Barry
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className="text-sm hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}