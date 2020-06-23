import React, {useRef, useEffect} from 'react';
import Aboutnavbar from './aboutnavbar';
import AboutHeader from './aboutHeader';
import AboutMe from './aboutMe';
import Skills from './skills';
import Interests from './interests';
import { useSelector } from 'react-redux';

function About(props) {

  const containerRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const interestsRef = useRef(null)

  const sticky = useSelector(state => state.sticky);

  useEffect(() => {
    containerRef.current.scrollTo({top: 0})
  }, [])

  return (
    <div className={sticky ? "sticky-item": "" }>
      <div className="mx-auto about-section">
        <div className="shadow about-info rounded position-relative">
          <Aboutnavbar containerRef={containerRef} aboutRef={aboutRef} skillRef={skillRef} interestsRef={interestsRef} />
          <AboutHeader />
          <div className="about-contents" ref={containerRef}>
            <div className="about-body">
              <div className="about-me" ref={aboutRef}>
                <AboutMe contactRef={props.contactRef} projectRef={props.projectRef}/>
              </div>
              <div className="about-skills" ref={skillRef}>
                <Skills />
              </div>
              <div className="about-interests" ref={interestsRef}>
                <Interests />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;