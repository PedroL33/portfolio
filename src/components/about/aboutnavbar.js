import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAboutHeader} from '../../actions';

function Aboutnavbar(props) {

  const dispatch = useDispatch()

  const [active, setActive] = useState("about");

  function handleClick(ref, section) {
    const topOffset = ref.current.offsetTop
    props.containerRef.current.scrollTo({top: topOffset, behavior: 'smooth'});
    setActive(section)
    dispatch(setAboutHeader(section))
  }

  return (
    <div className="about-navbar-container shadow"> 
      <div className={active==="about" ? "about-nav-button active" : "about-nav-button"} onClick={(e) => handleClick(props.aboutRef, "about")}>
        <i className="fas fa-user"></i>
        <div>About Me</div>
      </div>
      <div className={active==="skills" ? "about-nav-button active" : "about-nav-button"} onClick={(e) => handleClick(props.skillRef, "skills")}>
        <i className="fab fa-js-square"></i>
        <div>Skills</div>
      </div>
      <div className={active==="interests" ? "about-nav-button active" : "about-nav-button"} onClick={(e) => handleClick(props.interestsRef, "interests")}>
        <i className="far fa-star"></i>
        <div>Interests</div>
      </div>
    </div>
  )
}

export default Aboutnavbar;