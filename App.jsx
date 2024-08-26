import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="h-full bg-slate-800"></div>
      <Navbar />
      <Home />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
// import nanoid/react-icons
// images from https://undraw.co
