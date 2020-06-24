import React, {useRef, useEffect} from 'react';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Projects from './components/projects/index';
import About from './components/about/about';
import Contact from './components/contact';
import Footer from './components/footer';
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
          window.removeEventListener("scroll", () => handleScroll);
      }
  })

  const handleScroll = () => {
    dispatch(setSticky(navRef.current.getBoundingClientRect().top <= 1));
    const project = projectRef.current.getBoundingClientRect().top
    const about = aboutRef.current.getBoundingClientRect().top 
    const contact = contactRef.current.getBoundingClientRect().top 
    if(about <= document.documentElement.clientHeight * 0.11 && project >= document.documentElement.clientHeight) {
      dispatch(currentToAbout())
    }else if(project <= document.documentElement.clientHeight * 0.11 && contact >= document.documentElement.clientHeight) {
      dispatch(currentToProjects())
    } else if(contact <= document.documentElement.clientHeight * .11) {
      dispatch(currentToContact())
    } else if(about >= 0) {
      dispatch(currentReset())
    }
  }

  return (
    <div>
      <Header />
      <div ref={navRef}>
        <Nav aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      </div>
      <div className="page-content">
        <div ref={aboutRef}>
          <About projectRef={projectRef} contactRef={contactRef}/>
        </div>
        <div className="section-spacer"></div>
        <div ref={projectRef}>
          <Projects />
        </div>
        <div className="section-spacer"></div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <div className="section-spacer"></div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
