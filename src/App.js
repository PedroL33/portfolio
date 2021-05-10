import React, {useRef, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/admin/login';
import './App.css';
import Nav from './components/nav';
import Header from './components/header/header';
import Projects from './components/projects/index';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import {setSticky, currentToAbout, currentToContact, currentToProjects, currentReset} from './actions/index';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const sticky = useSelector(state => state.sticky);
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
    dispatch(setSticky(window.pageYOffset > window.innerHeight - 101));
    const project = projectRef.current.getBoundingClientRect().bottom
    const about = aboutRef.current.getBoundingClientRect().bottom 
    if(!sticky) {
      dispatch(currentReset())
    }else if(about <= 100 && project <= 100) {
      dispatch(currentToContact())
    }else if(about <= 100) {
      dispatch(currentToProjects())
    }else {
      dispatch(currentToAbout())
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <div>
            <Header />
            <div ref={navRef}>
              <Nav aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
            </div>
            <div className="page-content">
              <div ref={aboutRef}>
                <About projectRef={projectRef} contactRef={contactRef}/>
              </div>
              <div ref={projectRef}>
                <Projects />
              </div>
              <div className="section-spacer"></div>
              <div ref={contactRef}>
                <Contact />
              </div>
              <Footer />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
