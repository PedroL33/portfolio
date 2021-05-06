import React from 'react';
import styles from '../../styles/header.module.css';
import { useSelector } from 'react-redux';
import FixedLinks from './fixedLinks';

function Header() {

  const sticky = useSelector(state => state.sticky);

  return (
    <div id="header" className={sticky ? `${styles.container} ${styles.sticky}`: styles.container}>
      <div>
        <div className={styles.name}>Peter Lee</div>
        <div className={styles.desc}>Full Stack Developer</div>
      </div>
      <div className={styles.headerLinks}>
        <a className={styles.headerLink} href={window.location.origin + "/Resume.pdf"} target="_blank" rel="noopener noreferrer" >
          <i className="far fa-file-pdf"></i>
        </a>
        <a className={styles.headerLink} href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className={styles.headerLink} href="https://github.com/PedroL33" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <FixedLinks stick={sticky} />
    </div>
  )
}

export default Header;