import useFadeIn from "../hooks/useFadeIn";

export default function Section({ id, title, children }) {
  const ref = useFadeIn();

  return (
    <section id={id} className="scroll-mt-24">
      <div ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-center opacity-0">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-purple-600 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}