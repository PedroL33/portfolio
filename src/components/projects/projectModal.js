import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/project.module.css';
import Modal from 'react-bootstrap/Modal';
import UploadImage from '../admin/uploadImage';
import EditProject from '../admin/editProject';
import EditFeatures from '../admin/editFeatures/editFeatures';
import checkAuth from '../../actions/checkAuth';
import EditTech from '../admin/editTech';

function ProjectModal(props) {

  const modalImg = useSelector(state => state.modalImg);
  const project = useSelector(state => state.currentProject)
  const backgroundImage = modalImg.length ? modalImg: project.modalImg ? project.modalImg: `${window.location.origin}/images/noImage.jpg`;

  const headerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    padding: "0",
    backgroundPosition: "center",
    backgroundSize: "auto 100%"
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
            {checkAuth() ? <UploadImage type="modal" id={project._id} />: null}
            <i onClick={()=>props.setShow(false)} className={`${styles.closeButton} fas fa-times`}></i>
            <div className={styles.header}>
              <div className={styles.modalTitle}>
                {checkAuth() ? <EditProject id={project._id} />: null}
                {project.title}
              </div>
              <div className={styles.description}>{project.summary}</div>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                Visit Site
              </a>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body style={bodyStyles}>
          <div className={styles.featuresContainer}>
            <div className={styles.features}>
              {
                project.features && project.features.length ? project.features.map(item => (
                  <div className={styles.featureContainer} key={item.icon}> 
                    <div className={`${styles.feature}`}>
                      <i className={`${item.icon} ${styles.featureIcon}`}></i> 
                    </div>
                    <div className={styles.featureDesc}>{item.description}</div>
                  </div>
                  )
                ): <div className={styles.featureContainer}> 
                    <div className={`${styles.feature}`}>
                      <i className={`fas fa-pen ${styles.featureIcon}`}></i> 
                    </div>
                    <div className={styles.featureDesc}>No features yet.</div>
                  </div>
              }
              {checkAuth() ? <EditFeatures id={project._id}/>: null}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className={styles.footerContainer}>
            <div className={styles.tech}>
              {project.tech ? project.tech.map(item => (
                <div className={styles.techItem} style={{background: `${getColor()}`}} key={item}>
                  {item}
                </div>
              )): null}
              <EditTech id={project._id}/>
            </div>
            <div className={styles.gitLinkContainer}>
              <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className={styles.gitLink}>
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