import Home from './Home/Home.jsx'
import './App.css'
import About from './About/About.jsx'
import Project from './Project/Project.jsx'
import Sklls from './Skills/Sklls.jsx'
import Education from './Education/Education.jsx'
import Contact from './Contact/Contact.jsx'

function App() {
  return (
    <div className="App">
      <Home />
      <About /> 
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '10px'}} >
      <Project />
      </div> 
      <Sklls/>
      <Education/>
      <Contact/>
    
    </div>

  )
}

export default App
