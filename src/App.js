import React, {useRef, useEffect} from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import {setSticky, currentToAbout, currentToContact, currentToProjects, currentReset} from './actions/index';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const navRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener("scroll", () => handleScroll)
      }
  }, [])

  const handleScroll = () => {
    dispatch(setSticky(navRef.current.getBoundingClientRect().top <= 1));
    const project = projectRef.current.getBoundingClientRect().top
    const about = aboutRef.current.getBoundingClientRect().top 
    const contact = contactRef.current.getBoundingClientRect().top 
    if(project <= 10 && about >= 10) {
      dispatch(currentToProjects())
    }else if(about <= 10 && contact >= 10) {
      dispatch(currentToAbout())
    } else if(contact <= 10) {
      dispatch(currentToContact())
    } else if(project >= 0) {
      dispatch(currentReset())
    }
  }

  return (
    <div>
      <Header />
      <div ref={navRef}>
        <Nav />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  )
}

export default App;
