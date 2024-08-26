export const Navbar = () => {
  return (
    <div className="px-4 py-6 flex flex-col bg-slate-300 justify-center items-center sm:px-6 sm:py-8 sm:flex sm:bg-slate-300">
      <h1 className="text-4xl font-bold text-slate-500">
        Anthony <span className="text-slate-700">B.</span>
      </h1>
      <nav>
        <ul className="flex tracking-wide">
          <li>
            <a href="" className="px-1 mx-1">
              Home
            </a>
          </li>
          <li>
            <a href="" className="px-1 mx-1">
              About Me
            </a>
          </li>
          <li>
            <a href="" className="px-1 mx-1">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="px-1 mx-1">
              Links
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
