import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../styles/projectModal.module.css';
import checkAuth from '../../../actions/checkAuth';
import EditProject from '../../admin/editProject';
import UploadImage from '../../admin/uploadImage';

const ModalHeader = (props) => {

    const [img, setImg] = useState("");
    const backgroundImage = img.length ? img: props.project.modalImg ? props.project.modalImg: `${window.location.origin}/images/noImage.jpg`;

    const headerStyles = {
        backgroundImage: `url(${backgroundImage})`,
        padding: "0",
        backgroundPosition: "center",
        backgroundSize: "100% auto"
    }

    return (
        <Modal.Header style={headerStyles}>
          <div className={styles.headerContainer}>
            {checkAuth() ? <UploadImage img={img} setImg={setImg} type="modal" id={props.project._id} />: null}
            <i onClick={()=>props.setShow(false)} className={`${styles.closeButton} fas fa-times`}></i>
            <div className={styles.header}>
              <div className={styles.modalTitle}>
                {checkAuth() ? <EditProject />: null}
                {props.project.title}
              </div>
              <div className={styles.description}>{props.project.summary}</div>
              <a href={props.project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                Visit Site
              </a>
            </div>
          </div>
        </Modal.Header>
    )
}

export default ModalHeader;