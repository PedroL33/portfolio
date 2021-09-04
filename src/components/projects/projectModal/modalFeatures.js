import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/projectModal.module.css';
import Modal from 'react-bootstrap/Modal';
import EditFeatures from '../../admin/editFeatures/editFeatures';
import checkAuth from '../../../actions/checkAuth';

const ModalFeatures = (props) => {

    return (
        <Modal.Body style={{padding: "0"}}>
          <div className={styles.featuresContainer}>
            <div className={styles.features}>
              {
                props.project.features && props.project.features.length ? props.project.features.map(item => (
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
              {checkAuth() ? <EditFeatures id={props.project._id}/>: null}
            </div>
          </div>
        </Modal.Body>
    )
}

export default ModalFeatures;