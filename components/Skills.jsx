import { skillSet } from "../data";
import { SectionTitle } from "./SectionTitle";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section className="py-10 align-element bg-slate-600" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillSet.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
