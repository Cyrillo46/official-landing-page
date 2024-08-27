export const Navbar = () => {
  return (
    <nav className="bg-slate-700">
      <div className="px-4 py-6 flex flex-col justify-center items-center sm:px-6 sm:py-8 sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-4xl font-bold text-blue-100">
          Anthony.<span className="text-blue-400">B</span>
          ()
        </h2>
        <ul className="flex tracking-wide">
          <li>
            <a
              href="#home"
              className="px-1 mx-1 text-blue-100 capitalize text-lg hover:text-pink-400 duration-500">
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="px-1 mx-1 text-blue-100 capitalize text-lg hover:text-pink-400 duration-500">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-1 mx-1 text-blue-100 capitalize text-lg hover:text-pink-400 duration-500">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-1 mx-1 text-blue-100 capitalize text-lg hover:text-pink-400 duration-500">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
