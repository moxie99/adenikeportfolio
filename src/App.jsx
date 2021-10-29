import Intro from "./components/intro/Intro";
import About from "./components/About/About";
import Projects from "./components/ProjectList/ProjectList";
import './Styles.css';
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
