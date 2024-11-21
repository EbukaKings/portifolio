import Navbar from '../Navbar/Navbar.js';

import Intro from '../Intro/Intro.js';
import Services from '../Services/Services.js';
import Contact from '../Contact/contact.js';
import Projects from '../Projects/Projects.js';
import Footer from '../Footer/Footer.js';
import { ThemeContext } from '../../Context.js';
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accordian from '../Accordian/Accordian.js';


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
            <Accordian />
            <Services />
            <Contact />
            <Footer />
          </div>
        } />
        
        {/* Route for the Contactinfo component */}
        {/* <Route path="/contact-info" element={<Contactinfo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} /> */}
      </Routes>
    
  );
}

export default App;
