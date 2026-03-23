export default function SectionShell({ id, eyebrow, title, accent, children }) {
  const spacingClass =
    id === "skills" || id === "projects" || id === "contact" ? "mt-6" : "mt-8";
  const themeClass =
    id === "about"
      ? "section-theme-about"
      : id === "skills"
        ? "section-theme-skills"
        : id === "projects"
          ? "section-theme-projects"
          : "section-theme-contact";

  return (
    <section
      id={id}
      className={`section-shell ${themeClass} relative mx-auto min-h-screen max-w-[1920px] overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="section-grid absolute inset-x-[6%] top-[12%] h-[62%] rounded-[2.5rem] border border-white/6 opacity-45" />
        <div className="section-orb section-orb-primary absolute left-[-8%] top-[18%] h-52 w-52 rounded-full blur-3xl md:h-72 md:w-72" />
        <div className="section-orb section-orb-secondary absolute right-[-5%] top-[8%] h-56 w-56 rounded-full blur-3xl md:h-80 md:w-80" />
        <div className="section-orb section-orb-soft absolute bottom-[10%] left-[18%] h-36 w-36 rounded-full blur-[100px] md:h-52 md:w-52" />
        <div className="section-ring absolute left-[10%] top-[24%] h-44 w-44 rounded-full border md:h-64 md:w-64" />
        <div className="section-ring section-ring-delayed absolute bottom-[14%] right-[12%] h-52 w-52 rounded-full border md:h-72 md:w-72" />
        <div className="section-line absolute left-[18%] top-[18%] hidden h-px w-36 bg-gradient-to-r from-transparent via-current to-transparent md:block" />
        <div className="section-line section-line-delayed absolute bottom-[22%] right-[15%] hidden h-px w-48 bg-gradient-to-r from-transparent via-current to-transparent md:block" />
      </div>

      <div
        data-section-content
        data-scroll-reveal
        className="scroll-reveal relative z-10 flex min-h-[calc(100vh-10rem)] flex-col justify-center md:min-h-[calc(100vh-12rem)]"
      >
        <p className="font-mono text-lg text-mint md:text-2xl">{eyebrow}</p>
        <h2 className="theme-heading mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {title} <span className="text-mint">{accent}</span>
        </h2>
        <div className={spacingClass}>{children}</div>
      </div>
    </section>
  );
}
