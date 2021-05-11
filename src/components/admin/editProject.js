import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/admin/editProjects.module.css';
import { editProject, clearEditProject } from '../../actions/admin';
import { getProjects, setCurrentProject } from '../../actions';

function EditProject() {

  const dispatch = useDispatch();

  const project = useSelector(state => state.currentProject);
  const editResponse = useSelector(state => state.editProject);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(project.title);
  const [desc, setDesc] = useState(project.summary);
  const [gitLink, setGitLink] = useState(project.gitLink);
  const [liveLink, setLiveLink] = useState(project.liveLink);
  const [error, setError] = useState("")

  useEffect(() => {
    if(editResponse.errors) {
      reset();
      setError("Could not save changes.")
    }else if(editResponse.success) {
      dispatch(setCurrentProject(editResponse.success));
      handleHide();
      dispatch(getProjects())
      return ( () => {
        dispatch(clearEditProject());
      })
    }
  }, [editResponse])

  useEffect(() => {
    if(project) {
      reset();
    }
  }, [project])

  const isActive = () => {
    return title !== project.title || desc !== project.summary || gitLink !== project.gitLink || liveLink !== project.liveLink
  }

  const handleSubmit = async () => {
    const changes = {};
    changes.title = (title != project.title) && title;
    changes.summary = desc != project.summary && desc
    changes.gitLink = gitLink != project.gitLink && gitLink
    changes.liveLink = liveLink != project.liveLink && liveLink
    await dispatch(editProject(changes, project._id))
  }

  const handleHide = () => {
    setShow(false);
    setError("");
    reset();
  }

  const reset = () => {
    setTitle(project.title);
    setDesc(project.summary);
    setGitLink(project.gitLink);
    setLiveLink(project.liveLink);
  }

  return (
    <>
      <div className={styles.editProjects} onClick={()=>setShow(true)}>
        <i className="fas fa-pen"></i>
      </div>
      <Modal
          show={show}
          onHide={() => handleHide()}
          centered
          size="m"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? <div className={styles.errors}>{error}</div>: null}
          <div className={styles.form}>
            <label className={styles.formLabel}>Title:</label>
            <input className={styles.formItem} value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <label className={styles.formLabel}>Description:</label>
            <input className={styles.formItem} value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            <label className={styles.formLabel}>Github Link:</label>
            <input className={styles.formItem} value={gitLink} onChange={(e)=>setGitLink(e.target.value)}></input>
            <label className={styles.formLabel}>Live Link</label>
            <input className={styles.formItem} value={liveLink} onChange={(e)=>setLiveLink(e.target.value)}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.submit} disabled={!isActive()} onClick={()=>handleSubmit()}>Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditProject;