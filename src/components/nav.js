import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/navbar.module.css';
import styled from 'styled-components';
import { setSticky, notSticky, currentToAbout, currentToContact, currentToProjects, currentReset} from '../actions';

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
  color: #292e49;

  @media screen and (max-width: 1200px) { 
    display: none;
  }
`
export default function Nav(props) {

  const sticky = useSelector(state => state.sticky);
  const current = useSelector(state => state.currentPage)
  const dispatch = useDispatch();

  function handleClick(item) {
    const itemTop = item.current.getBoundingClientRect().top;
    const top = item!==props.aboutRef ? itemTop - 99: itemTop-1;
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const stickyScroll = () => {
      if(window.pageYOffset > window.innerHeight - 101 && !sticky) {
        dispatch(setSticky());
      }else if(window.pageYOffset < window.innerHeight - 101 && sticky) {
        dispatch(notSticky());
      }else {
        return
      }
    }

    document.addEventListener('scroll', stickyScroll, {passive: true});
    return () => {
      document.removeEventListener('scroll', stickyScroll);
    }
  }, [sticky])

  useEffect(() => {
    const currentScroll = () => {
      const aboutBox = props.aboutRef.current.getBoundingClientRect();
      const projectBox = props.projectRef.current.getBoundingClientRect();
      const contactBox = props.contactRef.current.getBoundingClientRect();
      if(aboutBox.top < 100 && aboutBox.bottom > 100) {
        current != "about" && dispatch(currentToAbout("about"));
      }else if(projectBox.top < 100 && projectBox.bottom > 100) {
        current != "projects" && dispatch(currentToProjects("projects"));
      }else if(contactBox.top < 100 && contactBox.bottom > 100) {
        current != "contact" && dispatch(currentToContact("contact"));
      }else {
        if(current.length) {
          dispatch(currentReset());
        }
      }
    }

    document.addEventListener('scroll', currentScroll, {passive: true})
    return () => {
      document.removeEventListener('scroll', currentScroll);
    }
  }, [current])
  
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
            <div className={current==="about" ? `${styles.link} ${styles.active}` : styles.link}>ABOUT</div>
            <div className={current==="about" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-user-alt"></i>
            </div>
          </li>
          <li onClick={() => handleClick(props.projectRef)}>
            <div className={current==="projects" ? `${styles.link} ${styles.active}` : styles.link}>PROJECTS</div>
            <div className={current==="projects" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-project-diagram"></i>
            </div>
          </li>
          <li onClick={() => handleClick(props.contactRef)}>
            <div className={current==="contact" ? `${styles.link} ${styles.active}` : styles.link}>CONTACT</div> 
            <div className={current==="contact" ? `${styles.resLink} ${styles.active}` : styles.resLink}>
              <i className="fas fa-feather"></i>
            </div>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}