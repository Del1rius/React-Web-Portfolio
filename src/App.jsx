// src/App.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
``