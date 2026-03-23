import SectionShell from "./SectionShell";
import { skillGroups } from "../data/portfolioData";
import { SkillLogoIcon } from "./icons";

export default function SkillsSection() {
  return (
    <SectionShell id="skills"  title="Tech" accent="Stack">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            data-scroll-reveal
            data-reveal="up"
            className="scroll-reveal theme-panel group rounded-[1.6rem] border p-8 transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            style={{ "--reveal-delay": `${80 + index * 110}ms` }}
          >
            <h3 className="font-mono text-xl font-bold uppercase tracking-wide text-mint transition duration-300 group-hover:drop-shadow-[0_0_14px_rgba(16,231,179,0.35)] md:text-2xl">
              {group.title}
            </h3>
            <div className="mt-7 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="theme-skill-pill inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 text-lg font-semibold md:text-xl"
                >
                  <SkillLogoIcon skill={item} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
