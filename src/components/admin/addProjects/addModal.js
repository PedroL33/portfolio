import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/admin/editProjects.module.css';
import { addProject, addProjectClear } from '../../../actions/admin';
import { getProjects } from '../../../actions';
import Modal from 'react-bootstrap/Modal';

function AddModal() {

  const dispatch = useDispatch();
  const addStatus = useSelector(state => state.addProject)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gitLink, setGitLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [show, setShow] = useState(false);

  useEffect(()=> {
    if(addStatus.success) {
      setShow(false);
      dispatch(addProjectClear());
    }
  }, [addStatus])

  function isValid() {
    return title.length > 3 && description.length > 3 && gitLink.length > 3 && liveLink.length > 3;
  }

  async function handleClick() {
    await dispatch(addProject(title, description, gitLink, liveLink));
    dispatch(getProjects());
  }

  function handleHide() {
    setShow(false)
    dispatch(addProjectClear());
  }

  return (
    <>
      <button className={styles.add} onClick={() => setShow(true)}>
        <i class="fas fa-plus"></i>
      </button>
      <Modal
        show={show}
        onHide={() => handleHide()}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add New Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.container}>
            <div className={styles.form}>
              {addStatus.errors ? <div className={styles.errors}>Could not add project</div>: null}
              <input className={styles.formItem} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Project Title"></input>
              <input className={styles.formItem} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Project Description"></input>
              <input className={styles.formItem} onChange={(e) => setGitLink(e.target.value)} type="text" placeholder="Git Link"></input>
              <input className={styles.formItem} onChange={(e) => setLiveLink(e.target.value)} type="text" placeholder="Live Link"></input>
              <button disabled={!isValid()} onClick={() => handleClick()} className={styles.submit}>Add</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddModal;