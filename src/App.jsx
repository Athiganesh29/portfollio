import Home from './Home/Home.jsx'
import './App.css'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx'
import Project from './Project/Project.jsx'
import Sklls from './Skills/Sklls.jsx'
import Education from './Education/Education.jsx'
import Contact from './Contact/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Home />
      <main className="content-area">
        <About />
        <Experience />
        <Project />
        <Sklls />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
