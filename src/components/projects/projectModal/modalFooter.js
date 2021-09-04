import React from 'react';
import styles from '../../../styles/projectModal.module.css';
import ModalTech from './modalTech';
import ModalLinks from './modalLinks';
import Modal from 'react-bootstrap/Modal';

const ModalFooter = (props) => {
    return (
        <Modal.Footer>
          <div className={styles.footerContainer}>
            <ModalTech project={props.project} /> 
            <ModalLinks project={props.project} />
          </div>
        </Modal.Footer>
    )
}

export default ModalFooter;