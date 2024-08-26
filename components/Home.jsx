import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HomeImg from "../assets/HomeImg.svg";

export const Home = () => {
  return (
    <>
      <main className="bg-slate-700 text-center h-1/5 flex">
        <div className="w-1/2 px-4 flex flex-col items-center gap-1">
          <h1 className="text-7xl font-bold text-blue-100">welcome</h1>
          <br />
          <p className="text-blue-100 text-3xl tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            autem corporis eius eum quos. Consequatur, suscipit id quas
            distinctio, quia error quae sequi porro ipsa molestiae recusandae
            aspernatur. Porro distinctio earum nesciunt delectus quam mollitia
            aut ipsa! Doloremque, quisquam ullam?
          </p>
          <br />
          <div className="flex">
            <a href="">
              <FaGithubSquare className="h-10 w-10 mx-2 text-blue-100 hover:text-pink-400 duration-700" />
            </a>
            <a href="">
              <FaLinkedin className="h-10 w-10 mx-2 text-blue-100 hover:text-pink-400 duration-700" />
            </a>
          </div>
        </div>
        <div className="w-1/2 justify-center items-center">
          <img src={HomeImg} className="h-90 w-90" alt="" />
        </div>
      </main>
    </>
  );
};
