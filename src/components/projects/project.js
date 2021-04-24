import React, { useState } from 'react';
import styles from '../../styles/project.module.css';
import Modal from 'react-bootstrap/Modal';

function Project(props) {

  const [show, setShow] = useState(false);  

  const headerStyles = {
    backgroundImage: "url("+window.location.origin+"/images/"+props.modalImg,
    padding: "0"
  }

  const bodyStyles = {
    padding: "0"
  }

  const getColor = () => {
    return "hsl(" + 360 * Math.random() + ',' +
    (25 + 70 * Math.random()) + '%,' + 
    (85 + 10 * Math.random()) + '%)';
  } 

  return (
    <div className={styles.container}>
      <img className={styles.siteImg} alt={`Landing page of ${props.title}`} src={`${window.location.origin}/images/${props.img}`}></img>  
      <div className={styles.body}>
        <div className={styles.overlay}>
        <button className={styles.title} onClick={() => setShow(true)}>
          {props.title}
        </button>
        </div>
        <div className={styles.blur}></div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="xl"
      >
        <Modal.Header style={headerStyles}>
          <div className={styles.headerContainer}>
            <i onClick={()=>setShow(false)} className={`${styles.closeButton} fas fa-times`}></i>
            <div className={styles.header}>
              <div className={styles.modalTitle}>{props.title}</div>
              <div className={styles.description}>{props.summary}</div>
              <a href={props.links[0]} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                Visit Site
              </a>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body style={bodyStyles}>
          <div className={styles.featuresContainer}>
            <div className={styles.features}>
              {
                props.features.map(item => (
                  <div className={styles.featureContainer} key={item.icon}> 
                    <div className={`${styles.feature}`}>
                      <i className={`${item.icon} ${styles.featureIcon}`}></i> 
                    </div>
                    <div className={styles.featureDesc}>{item.feature}</div>
                  </div>
                  )
                )
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footerContainer}>
            <div className={styles.tech}>
              {props.tech.map(item => (
                <div className={styles.techItem} style={{background: `${getColor()}`}} key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.gitLinkContainer}>
              <a href={props.links[1]} target="_blank" rel="noopener noreferrer" className={styles.gitLink}>
                <i className="fab fa-github"></i>
                &nbsp; Repo
              </a>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Project;