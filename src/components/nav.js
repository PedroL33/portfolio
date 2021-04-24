import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/navbar.module.css';

export default function Nav(props) {

  const sticky = useSelector(state => state.sticky);
  const section = useSelector(state => state.currentPage)

  function handleClick(item) {
    const navSpace = (document.documentElement.clientHeight * 0.09);
    const top = item.current.getBoundingClientRect().top;
    const offset = top - navSpace;
    window.scrollTo({
      top: offset + window.pageYOffset,
      behavior: "smooth"
    });
  }
  
  return (
    <div style={{backgroundImage: "url("+window.location.origin+"/images/background.jpg)"}} className={sticky ? `navbar-sticky ${styles.container}`: styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li onClick={() => handleClick(props.aboutRef)}>
            <div className={section==="about" ? `${styles.link} ${styles.active}` : styles.link}>ABOUT</div>
            <div className={section==="about" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-user-alt"></i>
            </div>
          </li>
          <li onClick={() => handleClick(props.projectRef)}>
            <div className={section==="projects" ? `${styles.link} ${styles.active}` : styles.link}>PROJECTS</div>
            <div className={section==="projects" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-project-diagram"></i>
            </div>
          </li>
          <li onClick={() => handleClick(props.contactRef)}>
            <div className={section==="contact" ? `${styles.link} ${styles.active}` : styles.link}>CONTACT</div> 
            <div className={section==="contact" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-feather"></i>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}