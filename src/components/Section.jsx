
// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
