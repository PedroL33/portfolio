import React from 'react';
import {useSelector} from 'react-redux';

function AboutMe(props) {

  var sticky = useSelector(state => state.sticky)

  function handleClick(item) {
    const navSpace = (document.documentElement.clientHeight * 0.1);
    const top = item.current.getBoundingClientRect().top 
    const offset = sticky && item===props.aboutRef ? top : top - navSpace;
    window.scrollTo({
        top: offset + window.pageYOffset,
        behavior: "smooth"
    });
  }

  return (
    <div className="about-me-container">
      <div className="about-me-intro">Hey I'm Peter,</div>
      <div className="about-me-desc">Software Developer located in Washington State, US </div>
      <div className="about-me-body">
        I am most happy when entangled in an awesome project.
        Check out my <button onClick={()=>handleClick(props.projectRef)}>portfolio</button> to see some of the stuff 
        I have done and <button onClick={()=>handleClick(props.contactRef)}>let me know what you think!</button>
      </div>
    </div>
  )
}

export default AboutMe;