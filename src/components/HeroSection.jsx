import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { contactItems } from "../data/portfolioData";
import { SocialIcon } from "./ui";
import { assetPath } from "../utils/assetPath";

export default function HeroSection({ onNavigate }) {
  const emailAddress = contactItems.find((item) => item.icon === "mail")?.label;
  const emailComposeLink = emailAddress
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`
    : null;
  const resumePath = assetPath("/Sudarshanreddy_resume.pdf");
  const profileImagePath = assetPath("/profileimage1.jpeg");

  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-[1920px] items-center overflow-hidden px-6 py-12 md:min-h-screen md:px-12 md:py-16 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-grid absolute inset-x-[8%] top-[14%] h-[58%] rounded-[2.5rem] border border-white/6 opacity-60" />
        <div className="hero-orb hero-orb-mint absolute left-[-8%] top-[18%] h-56 w-56 rounded-full blur-3xl md:h-80 md:w-80" />
        <div className="hero-orb hero-orb-blue absolute right-[-4%] top-[10%] h-64 w-64 rounded-full blur-3xl md:h-96 md:w-96" />
        <div className="hero-orb hero-orb-mint absolute bottom-[10%] left-[18%] h-40 w-40 rounded-full blur-[100px] md:h-56 md:w-56" />
        <div className="hero-ring absolute left-[12%] top-[22%] h-48 w-48 rounded-full border border-mint/20 md:h-72 md:w-72" />
        <div className="hero-ring hero-ring-delayed absolute bottom-[12%] right-[14%] h-56 w-56 rounded-full border border-sky-400/20 md:h-80 md:w-80" />
        <div className="hero-line absolute left-[20%] top-[16%] hidden h-px w-40 bg-gradient-to-r from-transparent via-mint/60 to-transparent md:block" />
        <div className="hero-line hero-line-delayed absolute bottom-[24%] right-[18%] hidden h-px w-52 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent md:block" />
      </div>

      <div
        data-section-content
        data-scroll-reveal
        className="scroll-reveal relative z-10 grid w-full items-center gap-8 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]"
      >
        <div className="max-w-4xl text-left">
          <p className="font-mono text-lg text-mint md:text-2xl">Hello I&apos;m</p>
          <h1 className="theme-heading mt-6 text-5xl font-bold tracking-tight md:text-7xl xl:text-[4rem]">
            Sudarshan <span className="text-mint drop-shadow-[0_0_22px_rgba(16,231,179,0.6)]">Reddy</span>
          </h1>
          <p className="theme-text-secondary mt-6 max-w-3xl text-xl leading-relaxed md:text-3xl">
            Full Stack Developer crafting digital experiences with clean code and modern
            technologies.
          </p>

          <div className="mt-10">
            <div className="mb-5 inline-flex items-center rounded-full border border-mint/30 bg-mint/10 px-4 py-2 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-mint md:text-base">
              Open to internships and full-time roles
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={resumePath}
              download="Sudarshanreddy_resume.pdf"
              className="theme-button-primary inline-flex min-w-64 items-center justify-center gap-3 rounded-[1.4rem] px-5 py-5 text-xl font-semibold transition hover:translate-y-[-2px]"
            >
              <DownloadIcon />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(event) => onNavigate(event, "contact")}
              className="theme-button-secondary inline-flex min-w-52 items-center justify-center rounded-[1.4rem] border px-8 py-5 text-xl font-semibold transition"
            >
              Get In Touch
            </a>
          </div>

          <div className="theme-icon-row mt-10 flex items-center gap-8">
            <SocialIcon href="https://github.com/Sudarshan1804" label="GitHub">
              <GitHubIcon />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/sudarshanreddy18/"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialIcon>
            {emailComposeLink ? (
              <SocialIcon href={emailComposeLink} label="Email">
                <MailIcon />
              </SocialIcon>
            ) : null}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-6 rounded-[2rem] bg-mint/10 blur-3xl" aria-hidden="true" />
          <div className="theme-panel relative mx-auto w-full max-w-[380px] overflow-hidden rounded-[2rem] border p-3 shadow-[0_24px_70px_rgba(2,8,23,0.45)]">
            <img
              src={profileImagePath}
              alt="Portrait of Sudarshan Reddy"
              className="h-[400px] w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
