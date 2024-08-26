import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
// import nanoid/react-icons
// images from https://undraw.co
