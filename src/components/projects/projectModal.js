import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/projectModal.module.css';
import Modal from 'react-bootstrap/Modal';
import UploadImage from '../admin/uploadImage';
import EditProject from '../admin/editProject';
import EditFeatures from '../admin/editFeatures/editFeatures';
import checkAuth from '../../actions/checkAuth';
import EditTech from '../admin/editTech';

function ProjectModal(props) {

  const [img, setImg] = useState("");
  const project = useSelector(state => state.currentProject)
  const backgroundImage = img.length ? img: project.modalImg ? project.modalImg: `${window.location.origin}/images/noImage.jpg`;

  const headerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    padding: "0",
    backgroundPosition: "center",
    backgroundSize: "100% auto"
  }

  const bodyStyles = {
    padding: "0"
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
            {checkAuth() ? <UploadImage img={img} setImg={setImg} type="modal" id={project._id} />: null}
            <i onClick={()=>props.setShow(false)} className={`${styles.closeButton} fas fa-times`}></i>
            <div className={styles.header}>
              <div className={styles.modalTitle}>
                {checkAuth() ? <EditProject />: null}
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
                    <div className={styles.feature}>
                      <i className={`${item.icon} ${styles.featureIcon}`}></i> 
                    </div>
                    <div className={styles.featureDesc}><span>{item.description}</span></div>
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
              {project.tech && project.tech.length ? project.tech.map(item => (
                <div className={styles.techItem} key={item}>
                  {item}
                </div>
              )): <div>No tech yet...</div>}
              {checkAuth() ? <EditTech id={project._id}/>: null}
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