import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from './modalHeader';
import ModalFeatures from './modalFeatures';
import ModalFooter from './modalFooter';

function ProjectModal(props) {

  const project = useSelector(state => state.currentProject)

  return (
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        centered
        size="xl"
      >
        <ModalHeader project={project} setShow={props.setShow} />
        <ModalFeatures project={project}/>
        <ModalFooter project={project} />
      </Modal>
  )
}

export default ProjectModal;