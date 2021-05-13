import React, { useRef } from 'react';
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

function App() {
  const navRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

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
            <div>
              <div ref={aboutRef}>
                <About projectRef={projectRef} contactRef={contactRef} />
              </div>
              <div ref={projectRef}>
                <Projects />
                <div className="section-spacer"></div>
              </div>
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
