// src/components/Navbar.jsx
import useTheme from "../hooks/useTheme";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },   // NEW
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/80 dark:bg-black/70 border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-semibold tracking-tight text-purple-700 dark:text-white hover:text-purple-600"
        >
          Timothy Barry
        </button>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  
                  className="relative text-sm font-medium text-purple-600 dark:text-slate-200 hover:text-purple-700 dark:hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-600 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1 text-sm text-slate-700 hover:bg-purple-50 dark:text-slate-200 dark:hover:bg-white/10"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
