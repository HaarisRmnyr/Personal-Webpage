import React from "react";
import Header from './components/Header';
import Hero from './Sections/Hero';
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Contact from "./Sections/Contact"
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <div className="sticky top-10">
      < Header />
      </div>
      <div id="Home">
      <Hero /></div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
      </div>
      
  );
}

export default App;
