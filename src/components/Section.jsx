// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
