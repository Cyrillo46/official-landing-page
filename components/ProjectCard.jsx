import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export const ProjectCard = ({ img, url, github, title, text }) => {
  return (
    <article className="bg-slate-800 rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className=" text-blue-200 text-xl tracking-wide font-medium">
          {title}
        </h2>
        <p className="mt-4 text-slate-300 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a target="_blank" href={url}>
            <TbWorldWww className="h-8 w-8 text-blue-200 hover:text-pink-400 duration-700" />
          </a>
          <a target="_blank" href={github}>
            <FaGithubSquare className="h-8 w-8 text-blue-200 hover:text-pink-400 duration-700" />
          </a>
        </div>
      </div>
    </article>
  );
};
