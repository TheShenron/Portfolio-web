// import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav"
import HeroImage from "./components/HeroImage";
import Top from "./components/Top"
import AboutMe from './components/AboutMe'
import TechnicalSkills from "./components/TechnicalSkills"
import Github from "./components/Github"
import Contact from "./components/Contact"
import Project from "./components/Project"

function App() {
  return (
    <>
      <Nav />
      <HeroImage />
      <Top/>
      <AboutMe />
      <TechnicalSkills />
      <Project />
      <Github />
      <Contact />
    </>
  );
}

export default App;
