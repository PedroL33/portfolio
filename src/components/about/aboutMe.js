import React from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/aboutMe.module.css';

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
    <div className={styles.container}>
      <div className={styles.intro}>Hey I'm Peter,</div>
      <div className={styles.desc}>Software Developer located in Washington State, US </div>
      <div className={styles.body}> 
        Check out my <div onClick={()=>handleClick(props.projectRef)}>portfolio</div> to see some of the stuff 
        I have done and <div onClick={()=>handleClick(props.contactRef)}>let me know what you think!</div>
      </div>
    </div>
  )
}

export default AboutMe;