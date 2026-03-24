import { useState } from "react";
import SectionShell from "./SectionShell";
import { certifications, highlights } from "../data/portfolioData";
import { CodeIcon, RocketIcon, CoffeeIcon } from "./icons";

const iconMap = {
  code: <CodeIcon />,
  rocket: <RocketIcon />,
  coffee: <CoffeeIcon />,
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <SectionShell id="about"  title="About" accent="ME">
      <div className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div
            data-scroll-reveal
            data-reveal="left"
            className="scroll-reveal theme-text-secondary space-y-6 text-[clamp(1.05rem,1.35vw,1.5rem)] leading-[1.5]"
            style={{ "--reveal-delay": "80ms" }}
          >
            <p>
              I&apos;m a full stack developer who enjoys turning ideas into responsive,
              reliable, and user-focused web applications. I like working across the
              stack and building products that feel polished on the frontend and
              dependable on the backend.
            </p>
            <p>
              My journey into software development started with curiosity about how
              things work on the internet. Over time, that curiosity grew into
              hands-on experience with React, Node.js, databases, and modern
              development tools. I care about writing code that is clean,
              maintainable, and built to solve real problems.
            </p>
            <p>
              I&apos;m especially interested in projects that involve problem solving,
              performance, and thoughtful user experience. Beyond coding, I enjoy
              exploring new technologies, sharpening my skills, and learning from the
              developer community.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4" role="list" aria-label="About highlights">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                role="listitem"
                data-scroll-reveal
                data-reveal="right"
                style={{ "--reveal-delay": `${160 + index * 110}ms` }}
                className="scroll-reveal theme-panel group rounded-[1.4rem] border p-3.5 transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-3.5">
                  <div className="theme-accent-chip rounded-xl p-3 text-mint transition duration-300">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="theme-heading text-xl font-semibold md:text-[1.7rem]">
                      {item.title}
                    </h3>
                    <p className="theme-text-secondary mt-1 text-lg md:text-xl">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div
            data-scroll-reveal
            data-reveal="up"
            className="scroll-reveal flex flex-wrap gap-3"
            style={{ "--reveal-delay": "200ms" }}
          >
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`rounded-full border px-5 py-2 font-mono text-sm uppercase tracking-[0.2em] transition md:text-base ${
                activeTab === "education"
                  ? "border-mint bg-mint text-slate-950"
                  : "border-white/15 text-slate-200 hover:border-mint/60 hover:text-mint"
              }`}
            >
              Education
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("certifications")}
              className={`rounded-full border px-5 py-2 font-mono text-sm uppercase tracking-[0.2em] transition md:text-base ${
                activeTab === "certifications"
                  ? "border-mint bg-mint text-slate-950"
                  : "border-white/15 text-slate-200 hover:border-mint/60 hover:text-mint"
              }`}
            >
              Certifications
            </button>
          </div>

          <div
            data-scroll-reveal
            data-reveal="up"
            className="scroll-reveal"
            style={{ "--reveal-delay": "220ms" }}
          >
          {activeTab === "education" ? (
            <div className="mt-6 space-y-6">
              <article className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="theme-heading text-xl font-semibold md:text-[1.6rem]">
                      Lovely Professional University
                    </h4>
                    <p className="theme-text-secondary text-lg md:text-xl">
                      Bachelor of Technology - Computer Science and Engineering; CGPA: 7.53
                    </p>
                  </div>
                  <div className="theme-text-secondary text-left text-base md:text-right md:text-lg">
                    <p>Jalandhar, Punjab</p>
                    <p>Aug&apos; 23 - Present</p>
                  </div>
                </div>
              </article>

              <article className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="theme-heading text-xl font-semibold md:text-[1.6rem]">
                      NRI Junior College
                    </h4>
                    <p className="theme-text-secondary text-lg md:text-xl">
                      Intermediate; Percentage: 97.7%
                    </p>
                  </div>
                  <div className="theme-text-secondary text-left text-base md:text-right md:text-lg">
                    <p>Guntur, Andhra Pradesh</p>
                    <p>Jun&apos; 22 - Apr&apos; 23</p>
                  </div>
                </div>
              </article>

              <article>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="theme-heading text-xl font-semibold md:text-[1.6rem]">
                      Sri Malleswara Reddy E.M High School
                    </h4>
                    <p className="theme-text-secondary text-lg md:text-xl">
                      Matriculation; Percentage: 100%
                    </p>
                  </div>
                  <div className="theme-text-secondary text-left text-base md:text-right md:text-lg">
                    <p>Nandyala, Andhra Pradesh</p>
                    <p>Jun&apos; 20 - Apr&apos; 21</p>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="mt-6 space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                {certifications.map((certification) => (
                  <a
                    key={certification.title}
                    href={certification.url}
                    target={certification.url ? "_blank" : undefined}
                    rel={certification.url ? "noreferrer" : undefined}
                    className={`block overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] transition duration-300 ${
                      certification.url
                        ? "hover:-translate-y-2 hover:border-mint/40"
                        : ""
                    }`}
                  >
                    <img
                      src={certification.image}
                      alt={certification.imageAlt}
                      className="h-44 w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <h4 className="theme-heading text-lg font-semibold md:text-[1.2rem]">
                        {certification.title}
                      </h4>
                      <p className="theme-text-secondary mt-1 text-sm md:text-base">
                        {certification.platform}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
