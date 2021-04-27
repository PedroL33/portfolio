import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/project.module.css';
import Modal from 'react-bootstrap/Modal';
import UploadImage from '../admin/uploadImage';

function ProjectModal(props) {

  const modalImg = useSelector(state => state.modalImg)
  const backgroundImage = modalImg.length ? modalImg: props.project.modalImg ? props.project.modalImg: `${window.location.origin}/images/noImage.jpg`;

  const headerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    padding: "0",
    backgroundPosition: "center",
    backgroundSize: "100% auto"
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
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        centered
        size="xl"
      >
        <Modal.Header style={headerStyles}>
          <div className={styles.headerContainer}>
            <UploadImage type="modal" id={props.project._id} />
            <i onClick={()=>props.setShow(false)} className={`${styles.closeButton} fas fa-times`}></i>
            <div className={styles.header}>
              <div className={styles.modalTitle}>{props.project.title}</div>
              <div className={styles.description}>{props.project.summary}</div>
              <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                Visit Site
              </a>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body style={bodyStyles}>
          <div className={styles.featuresContainer}>
            <div className={styles.features}>
              {
                props.project.features ? props.project.features.map(item => (
                  <div className={styles.featureContainer} key={item.icon}> 
                    <div className={`${styles.feature}`}>
                      <i className={`${item.icon} ${styles.featureIcon}`}></i> 
                    </div>
                    <div className={styles.featureDesc}>{item.feature}</div>
                  </div>
                  )
                ): null
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footerContainer}>
            <div className={styles.tech}>
              {props.project.tech.map(item => (
                <div className={styles.techItem} style={{background: `${getColor()}`}} key={item}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.gitLinkContainer}>
              <a href={props.project.gitLink} target="_blank" rel="noopener noreferrer" className={styles.gitLink}>
                <i className="fab fa-github"></i>
                &nbsp; Repo
              </a>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
  )
}

export default ProjectModal;