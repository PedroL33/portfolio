import React, {useRef, useEffect, useState} from 'react';
import styles from '../styles/about.module.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Underline = styled.span`
  position: relative;
  white-space: nowrap;
  &::after {
    content: '';
    position: absolute;
    bottom: -0.125rem;
    left: -0.3rem;
    right: -0.3rem;
    height: 0.75rem;
    width: ${props => props.currentPage=="about" ? "110%": "0"};
    z-index: -1;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
    background-repeat: no-repeat;
    background-size: cover;
    ${props => props.currentPage=="about" ? `transition: all 500ms linear; transition-delay: ${props.order * 550}ms`: ""};
  }
  &:hover {
    cursor: pointer;
  }
`

const Highlight = styled.span`
  position: relative;
  white-space: nowrap;
  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    max-width: 100vw;
    transform: skew(-10deg);
    box-sizing: content-box;
    content: "";
    width: ${props => props.currentPage=="about" ? "100%": "0"};
    height: 80%;
    background-color: yellow;
    z-index: -1;
    ${props => props.currentPage=="about" ? `transition: all 500ms linear; transition-delay: ${props.order * 550}ms;`: ""};
  }
` 

function About(props) {

  const aboutRef = useRef(null);
  const currentPage = useSelector(state => state.currentPage);
  const [sticky, setSticky] = useState(false);

  const handleClick = (item) => {
    window.scrollTo({
        top: item.current.offsetTop - 99,
        behavior: "smooth"
    });
  }

  useEffect(() => {
    if(currentPage != "") {
      setSticky(true)
    }else {
      setSticky(false)
    }
  }, [currentPage])

  return (
    <div ref={aboutRef} className={sticky ? `stickyItem ${styles.container}`: styles.container}>
      <div className={styles.body}>
        <div className={styles.body__container}>
          <div className={styles.intro}>Hey I'm Peter,</div>
          <div className={styles.desc}>Software Developer located in Washington State, US </div>
          <div className={styles.greeting}>
            <div className={styles.text}> 
              I have developed and launched several full stack projects using <Highlight order={0} currentPage={currentPage}>React/Redux</Highlight> and 
              &nbsp;<Highlight order={1} currentPage={currentPage}>Node.js</Highlight> or <Highlight order={2} currentPage={currentPage}>Ruby on Rails</Highlight>. 
              I think they are pretty cool.
            </div>
            <div className={styles.text}>
              Check out some of <Underline onClick={()=>handleClick(props.projectRef)} order={3} currentPage={currentPage}>my work</Underline> 
              &nbsp; to see what I have been up to and <Underline onClick={()=>handleClick(props.contactRef)} order={4} currentPage={currentPage}>
              tell me</Underline> what you think.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;