import About from './components/About';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import './index.css';
import AOS from 'aos';

AOS.init(
  {
      once: true,
  }
);

function App() {

  return (
  <>
    <Header />
    <Intro />
    <About />
    <Skills />
    <WorkExperience />
    <Projects />
    <ContactSection />
  </>
  )
}

export default App;
