import React from 'react';
import styles from '../styles/header.module.css';

function Header() {

  return (
    <div id="header" className={styles.container} style={{backgroundImage: "url("+window.location.origin+"/images/background.jpg)"}}>
      <div>
        <div className={styles.name}>Peter Lee</div>
        <div className={styles.desc}>Software Developer</div>
      </div>
      <div className={styles.fixedLinks}>
        <a className={styles.fixedLink} href={window.location.origin + "/Resume.pdf"} target="_blank" rel="noopener noreferrer" style={{background: "#ff9966"}}>
          <span aria-hidden="true">Resume</span>
          <i className="far fa-file-pdf"></i>
        </a>
        <a className={styles.fixedLink} href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank" rel="noopener noreferrer" style={{background: "#007bb6"}}>
          <span aria-hidden="true">LinkedIn</span>
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className={styles.fixedLink} href="https://github.com/PedroL33" target="_blank" rel="noopener noreferrer" style={{background: "#000000"}}>
          <span aria-hidden="true">Github</span>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}

export default Header;