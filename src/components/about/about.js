import React, {useRef, useEffect} from 'react';
import Aboutnavbar from './aboutnavbar';
import AboutHeader from './aboutHeader';
import AboutMe from './aboutMe';
import Skills from './skills';
import Interests from './interests';
import { useSelector } from 'react-redux';
import styles from '../../styles/about.module.css';

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
    <div>
      <div className={styles.container}>
        <div className={`shadow rounded ${styles.body}`}>
          <Aboutnavbar containerRef={containerRef} aboutRef={aboutRef} skillRef={skillRef} interestsRef={interestsRef} />
          <AboutHeader />
          <div className={styles.contents} ref={containerRef}>
            <div className={styles.contentBody}>
              <div className={styles.contentBodyItem} ref={aboutRef}>
                <AboutMe contactRef={props.contactRef} projectRef={props.projectRef}/>
              </div>
              <div className={styles.contentBodyItem} ref={skillRef}>
                <Skills />
              </div>
              <div className={styles.contentBodyItem} ref={interestsRef}>
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