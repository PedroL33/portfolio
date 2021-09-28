import React from 'react';
import styles from '../../styles/header.module.css';
import { useSelector } from 'react-redux';
import FixedLinks from './fixedLinks';
import styled from 'styled-components';
import resume from '../../resources/PeterLeeResume.pdf';

const Letter = styled.span`
  position: relative;
  display: inline-block;
  color: white;
  transform-style: preserve-3d;
  font-weight: 700;
  margin-left: 10px;
  &::after, &::before {
    content: "${props => props.letter}";
    position: absolute;
    top: 0px;
    left: -1px;
    transform-origin: left top;
  }
  &::after {
    transform: rotateY(-30deg);
    text-shadow -1px 0 1px #00303f, 1px 0 1px rgba(0, 0, 0, .3);
    color: #00303f;
    z-index: 2;
    transition: all 300ms ease;
  }
  &::before {
    z-index: 1;
    color: rgba(0, 0, 0, .2);
    transform: scale(1.1, 1) skew(0deg, 10deg);
    transition: all 300ms ease;
  }
  &:hover {
    &::after {
      transform: rotateY(-10deg);
    }
    &::before {
      transform: skew(0deg, 2deg) scale(1.1, 1)
    }
  }
  @media screen and (max-width: 1200px) { 
    margin-left: 5px;
  }
`;

const Header = () => {

  const sticky = useSelector(state => state.sticky);

  return (
    <div id="header" className={sticky ? `${styles.container} ${styles.sticky}`: styles.container}>
      <div>
        <div className={styles.name}>
          <Letter letter="P">P</Letter>
          <Letter letter="e">e</Letter>
          <Letter letter="t">t</Letter>
          <Letter letter="e">e</Letter>
          <Letter letter="r">r</Letter>
          <Letter letter="L" style={{marginLeft: "20px"}}>L</Letter>
          <Letter letter="e">e</Letter>
          <Letter letter="e">e</Letter>

        </div>
        <div className={styles.desc}>Full Stack Developer</div>
        <div className={styles.headerLinks}>
          <a className={styles.headerLink} href={resume} target="_blank" rel="noopener noreferrer" >
            <i className="far fa-file-pdf"></i>
          </a>
          <a className={styles.headerLink} href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className={styles.headerLink} href="https://github.com/PedroL33" target="_blank" rel="noopener noreferrer" >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <FixedLinks stick={sticky} />
    </div>
  )
}

export default Header;