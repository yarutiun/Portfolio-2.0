import About from './components/About';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import './index.css';

function App() {

  return (
  <div>
    <Header />
    <Intro />
    <About />
    <Skills />
    <WorkExperience />
    <Projects />
    <ContactSection />
  </div>
  )
}

export default App;
