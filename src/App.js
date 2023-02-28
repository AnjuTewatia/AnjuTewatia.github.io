import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Skills from './components/Skills';
import Github from './components/Github';
import Project from './components/Project';
import Contact from './components/Contact';
import Tools from './components/Tools';
function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
     <Tools/>
      <Project />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
