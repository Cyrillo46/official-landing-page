import { projects } from "../data";
import { SectionTitle } from "./SectionTitle";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="py-10 px-5 align-element bg-slate-600" id="projects">
      <SectionTitle text="Projects" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <ProjectCard bg="bg-slate-500" key={project.id} {...project} />
          );
        })}
      </div>
    </section>
  );
};
