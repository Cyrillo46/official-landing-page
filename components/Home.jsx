import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HomeImg from "../assets/HomeImg.svg";

export const Home = () => {
  return (
    <>
      <main className="bg-slate-700 text-center h-1/5 flex" id="home">
        <div className="w-1/2 px-4 flex flex-col items-center gap-1 mt-12">
          <h1 className="text-7xl font-bold text-blue-100">welcome</h1>
          <br />
          <p className="text-blue-100 text-3xl tracking-wide">
            A self-taught Web Developer proficient in HTML/CSS, JavaScript, and
            React.js. I strive to become a senior engineer, utilizing my skills
            and experiences to achieve success that I can share with others. I
            aspire to reach a level where I can make a significant impact on the
            world by contributing to causes that improve lives and create
            opportunities for those in need.
          </p>
          <br />
          <div className="flex">
            <a href="https://github.com/Cyrillo46" target="_blank">
              <FaGithubSquare className="h-10 w-10 mx-2 text-blue-100 hover:text-pink-400 duration-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthonycyrillo/"
              target="_blank">
              <FaLinkedin className="h-10 w-10 mx-2 text-blue-100 hover:text-pink-400 duration-700" />
            </a>
          </div>
        </div>
        <div className="w-1/2 justify-center items-center">
          <img src={HomeImg} className="h-90 w-90 pl-20" alt="" />
        </div>
      </main>
    </>
  );
};
