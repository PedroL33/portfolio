import React, { useState } from 'react';
import styles from '../styles/about.module.css';
import styled from 'styled-components';

const BorderContainer = styled.div`
  position: absolute;
  border: 1px solid black;
  width: 1000px;
  height: 500px;
  top: ${props => props.invert ? "-20px": "20px"};
  left: ${props => props.invert ? "-20px": "20px"};
  z-index: 1;
  transition: all 300ms ease-in-out;
`

const SolidContainer = styled.div`
  position: absolute;
  background: black;
  width: 1000px;
  height: 500px;
  top: ${props => props.invert ? "20px": "-20px"};
  right: ${props => props.invert ? "-20px": "20px"};
  z-index: 1;
  transition: all 300ms ease-in-out;
`

function About(props) {

  const [invert, setInvert] = useState(false)

  function handleClick(item) {
    window.scrollTo({
        top: item.current.offsetTop - 100,
        behavior: "smooth"
    });
  }

  return (
  <div className={styles.container}>
    <div className={styles.body} onMouseEnter={()=>setInvert(true)} onMouseLeave={()=>setInvert(false)}>
      <BorderContainer invert={invert} />
      <SolidContainer invert={invert} />
      <div className={styles.body__container}>
        <div className={styles.intro}>Hey I'm Peter,</div>
        <div className={styles.desc}>Software Developer located in Washington State, US </div>
        <div className={styles.text}> 
          I have developed and launched several full stack projects using React/Redux and Node.js or Ruby on Rails. 
          I think they are pretty cool.
        </div>
        <div className={styles.text}>
          Check out some of my <span onClick={()=>handleClick(props.projectRef)}>projects &nbsp;</span> 
          to see what I have been working on and <span onClick={()=>handleClick(props.contactRef)}>let me know what you think!&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About;