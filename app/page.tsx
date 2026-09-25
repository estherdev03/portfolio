import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Principles from "./components/Principles";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div className="text-white">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Principles />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
