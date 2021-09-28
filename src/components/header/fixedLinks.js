import React from 'react';
import styles from '../../styles/header.module.css';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    z-index: 3;
    position: fixed;
    bottom: 100px; 
    right: 100px;
    align-items: flex-start;
    opacity: ${props => props.sticky ? '1': '0'};
    transition: opacity 300ms ease-in-out;

    @media screen and (max-width: 1200px) { 
      right: 25px;
      bottom: 25px;
    }
  `

const FixedLinks = () => {
  
  const sticky = useSelector(state => state.sticky);

  return (
    <Container className={styles.fixedLinks} sticky={sticky}>
      <a className={styles.fixedLink} href={window.location.origin + "/PeterLeeResume.pdf"} target="_blank" rel="noopener noreferrer" >
        <i className="far fa-file-pdf"></i>
      </a>
      <a className={styles.fixedLink} href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a className={styles.fixedLink} href="https://github.com/PedroL33" target="_blank" rel="noopener noreferrer" >
        <i className="fab fa-github"></i>
      </a>
    </Container>
  )
}

export default FixedLinks;