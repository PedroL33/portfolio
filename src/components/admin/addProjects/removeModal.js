import React, { useState, useEffect } from 'react';
import styles from '../../../styles/admin/addModal.module.css';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject, clearDeleteProject } from '../../../actions/admin';
import { getProjects } from '../../../actions';

function RemoveModal() {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const projects = useSelector(state => state.projects);
  const deleteResponse = useSelector(state => state.deleteProject)
  const [remove, setRemove] = useState({});

  useEffect(() => {
    if(deleteResponse.success) {
      dispatch(clearDeleteProject())
      handleHide();
    }
  }, [deleteResponse])

  function handleClick(projectId) {
    if(remove[projectId]) {
      remove[projectId] = 0;
    }else {
      remove[projectId] = 1;
    }
    setRemove({...remove})
  }

  function handleHide() {
    dispatch(clearDeleteProject())
    setShow(false);
    setRemove({})
  }

  function isActive() {
    const rem = Object.values(remove)
    return rem.length > 0 ? rem.reduce((acc, item) => acc+item) > 0: false
  }

  async function handleSubmit() {
    let projects = []
    Object.keys(remove).forEach(item => {
      if(remove[item] == 1) {
        projects.push(item);
      }
    })
    await dispatch(deleteProject(projects))
    await dispatch(getProjects())
  }

  return (
    <>
      <button className={styles.add} onClick={() => setShow(true)}>
        <i class="fas fa-minus"></i>
      </button>

      <Modal
        show={show}
        onHide={() => handleHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Remove Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteResponse.errors ? <div>Projects could not be deleted.</div>:null}
          { projects.length ? projects.map(item => (
              <div className={remove[item._id] ? styles.remove: null} onClick={() => handleClick(item._id)}>
                {item.title}
              </div>
            )): <div>No projects yet.</div>
          }
        </Modal.Body>
        <Modal.Footer>
          <button disabled={!isActive()} onClick={() => handleSubmit()}>Submit</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RemoveModal;