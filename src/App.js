import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import WhyHireMe from "./components/WhyHireMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="noise-bg grid-bg">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <CurrentlyBuilding />
      <WhyHireMe />
      <Footer />
    </div>
  );
}

export default App;
