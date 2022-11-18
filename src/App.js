import React from 'react';
import './App.css';
import Aside from './components/aside'
import Hero from './components/hero'
import About from './components/about'
// import Services from './components/services'
// import PersonCounter from './components/person-counter'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <Aside></Aside>
      <div id="colorlib-main">
        <Hero></Hero>
        <About></About>
        {/* <PersonCounter></PersonCounter> */}
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience> 
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
