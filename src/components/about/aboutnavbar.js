import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setAboutHeader} from '../../actions';

function Aboutnavbar(props) {

  const dispatch = useDispatch()

  const [active, setActive] = useState("about");

  function handleClick(ref, section) {
    const topOffset = ref.current.offsetTop
    props.containerRef.current.scrollTo({top: topOffset, right: 0, behavior: 'smooth'});
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
        <i class="fab fa-js-square"></i>
        <div>Skills</div>
      </div>
      <div className={active==="interests" ? "about-nav-button active" : "about-nav-button"} onClick={(e) => handleClick(props.interestsRef, "interests")}>
        <i class="far fa-star"></i>
        <div>Interests</div>
      </div>
      <div className={active==="contact" ? "about-nav-button active" : "about-nav-button"} onClick={(e) => handleClick(props.contactRef, "contact")}>
        <i class="fas fa-feather"></i>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Aboutnavbar;