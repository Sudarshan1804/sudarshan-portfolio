import SectionShell from "./SectionShell";
import { projects } from "../data/portfolioData";
import { ExternalLinkIcon, GitHubIcon } from "./icons";
import { SocialIcon } from "./ui";

export default function ProjectsSection() {
  return (
    <SectionShell id="projects"  title="Featured" accent="Work">
      <div className="space-y-6">
        <p
          data-scroll-reveal
          data-reveal="up"
          className="scroll-reveal theme-text-secondary max-w-3xl text-[clamp(1rem,1.25vw,1.2rem)] leading-relaxed"
          style={{ "--reveal-delay": "70ms" }}
        >
          Here are a few projects I&apos;ve built 
        </p>
        <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            data-scroll-reveal
            data-reveal="zoom"
            className="scroll-reveal theme-panel group overflow-hidden rounded-[1.5rem] border transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            style={{ "--reveal-delay": `${90 + index * 120}ms` }}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              className="theme-project-banner h-44 w-full object-cover object-center"
              loading="lazy"
            />
            <div className="space-y-3 p-5">
              <div>
                <h3 className="theme-heading text-2xl font-semibold md:text-[2rem]">
                  {project.name}
                </h3>
                <p className="theme-text-secondary mt-2 text-[1.05rem] leading-relaxed md:text-[1.2rem]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="theme-tag rounded-xl px-3 py-1.5 font-mono text-sm text-mint md:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="theme-icon-row flex gap-4">
                <SocialIcon href={project.githubUrl ?? "#"} label={`${project.name} repository`}>
                  <GitHubIcon />
                </SocialIcon>
                <SocialIcon href={project.liveUrl ?? "#"} label={`${project.name} live demo`}>
                  <ExternalLinkIcon />
                </SocialIcon>
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </SectionShell>
  );
}
