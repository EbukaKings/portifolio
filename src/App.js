import Navbar from './components/Navbar/Navbar';
import './App.css';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./Context";
import { useContext } from "react";

function App() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
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
  );
}

export default App;
