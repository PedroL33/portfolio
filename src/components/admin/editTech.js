import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import styles from '../../styles/admin/editProjects.module.css';
import { editTech, clearEditTech } from '../../actions/admin';
import { setCurrentProject, getProjects } from '../../actions';

const EditTech = (props) => {

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector(state => state.currentProject);
  const editTechRes = useSelector(state => state.editTech);
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState("");
  const [errors, setErrors] = useState("")

  useEffect(() => {
    if(editTechRes.errors) {
      setErrors(editTechRes.errors)
    }else if(editTechRes.success) {
      dispatch(setCurrentProject(editTechRes.success));
      setShow(false);
      setErrors("");
      return( () => {
        dispatch(clearEditTech());
        dispatch(getProjects());
      })
    }
  }, [editTechRes])

  const handleClose = () => {
    setShow(false);
    setNewTech("");
    setErrors("");
  }

  const handleOpen = () => {
    setShow(true);
    setTech([...project.tech]);
    setErrors("");
  }

  const addTech = () => {
    setTech([...tech, newTech]);
    setNewTech("");
  }

  const disabled = () => {
    return JSON.stringify(tech) == JSON.stringify(project.tech)
  }

  const removeTech = (idx) => {
    tech.splice(idx, 1);
    setTech([...tech])
  }

  const handleSubmit = () => {
    dispatch(editTech(tech, props.id))
  }

  return (
    <>
      <div className={styles.editTech} onClick={()=>handleOpen()}>
        <i className="fas fa-pen"></i>
      </div>
      <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      size="m">
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Project Technologies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.form}>
            {errors.length ? <div className={styles.errors}>{errors}</div>: null}
            {
              tech.length ? tech.map((item, i) => 
                <div className={styles.techItem} key={i}>
                  <div className={styles.title}>{item}</div>
                  <button className={styles.removeTech} onClick={(i)=>removeTech(i)}><i className="fas fa-minus"></i></button>
                </div>
              ): <div>No technologies yet.</div>
            }
            <div className={styles.addTechContainer}>
              <input type="text" className={styles.addTechInput} value={newTech} onChange={(e)=>setNewTech(e.target.value)}></input>
              <button disabled={!newTech} className={styles.addTechButton} onClick={()=>addTech()}>+</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.submit} disabled={disabled()} onClick={()=>handleSubmit()}>Save Changes</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditTech;