import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/navbar.module.css';
import styled from 'styled-components';

const Navbar = styled.div`
  width: ${props => props.sticky ? '50%':'100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 300ms ease-in-out;

  @media screen and (max-width: 1200px) { 
    width: 100%;
  }
`

const Logo = styled.div`
  position: absolute;
  width: 200px;
  height: 100%;
  opacity: ${props => props.sticky ? "1": "0"};
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 500ms ease-in-out;
  font-size: 24px;
  cursor: pointer;
  color: #457fca;

  @media screen and (max-width: 1200px) { 
    display: none;
  }
`
export default function Nav(props) {

  const sticky = useSelector(state => state.sticky);
  const section = useSelector(state => state.currentPage)

  function handleClick(item) {
    const top = item.current.getBoundingClientRect().top - 99;
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
  }
  
  return (
    <div className={sticky ? `navbar-sticky ${styles.container}`: styles.container}>
      <Logo sticky={sticky} onClick={() => window.scrollTo({
        top: 0,
        behavior: "smooth"
      })}>
        Peter Lee
      </Logo>
      <Navbar sticky={sticky} >
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
      </Navbar>
    </div>
  );
}