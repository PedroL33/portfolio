import React, {useRef, useEffect} from 'react';
import Aboutnavbar from './aboutnavbar';
import AboutHeader from './aboutHeader';
import Skills from './skills';
import Interests from './interests';
import { useSelector } from 'react-redux';

function About() {

  const containerRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const interestsRef = useRef(null)
  const contactRef = useRef(null)

  const sticky = useSelector(state => state.sticky);

  useEffect(() => {
    containerRef.current.scrollTo({top: 0})
  }, [])

  return (
    <div className={sticky ? "sticky-item": "" }>
      <div className="mx-auto about-section">
        <div className="shadow about-info rounded position-relative">
          <Aboutnavbar containerRef={containerRef} aboutRef={aboutRef} skillRef={skillRef} interestsRef={interestsRef} contactRef={contactRef} />
          <AboutHeader />
          <div className="about-contents" ref={containerRef}>
            <div className="about-body">
              <div className="about-me" ref={aboutRef}>
                Hey I'm Peter. I enjoy creating web applications. I am most happy when entangled in an awesome project.
                I am always looking for new people to work with and learn from.  Check out my portfolio to see some of the stuff I have done!
              </div>
              <div className="about-skills" ref={skillRef}>
                <Skills />
              </div>
              <div className="about-interests" ref={interestsRef}>
                <Interests />
              </div>
              <div className="about-contact" ref={contactRef}>
                Contact Info
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;