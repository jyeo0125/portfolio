import './App.css';
import NavBar from'./Components/NavBar'
import Footer from'./Components/Footer'
import Active from'./Pages/Activebanner'
import AboutMe from'./Pages/AboutMe'
import Skills from'./Pages/Skills'
import Projects from'./Pages/Projects'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr></hr>
      <Active/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <hr></hr>
      <Footer/>
      
     
    </div>
  );
}

export default App;
