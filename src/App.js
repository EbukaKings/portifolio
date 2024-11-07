import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import Intro from "./components/Intro/Intro.js";
import Services from "./components/Services/Services.js";
import Contact from "./components/Contact/contact.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";
import { ThemeContext } from "./Context";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactinfo from './components/contact-info/Contactinfo.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Works from './components/Works/Work.js';


function App() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    
      <Routes>
        {/* Routes for the main components */}
        <Route path="/" element={
          <div
            className="App"
            style={{
              background: darkMode ? 'black' : 'white',
              color: darkMode ? 'white' : 'black',
            }}
          >
            <Navbar />
            <Intro />
            <Projects />
            <Services />
            <Contact />
            <Footer />
          </div>
        } />
        
        {/* Route for the Contactinfo component */}
        <Route path="/contact-info" element={<Contactinfo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/About" element={<About />} />
      </Routes>
    
  );
}

export default App;
