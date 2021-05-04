import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../styles/admin/editProjects.module.css';

const AddFeature = (props) => {

  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = () => {
    const newFeature = {
      description: desc,
      icon: icon
    }
    props.setFeatures([...props.features, newFeature]);
    setDesc("");
    setIcon("");
    setShow(false);
  }

  return (
    <> 
      <button className={styles.submit} onClick={()=>setShow(true)}>
        <i className="fas fa-plus"></i>
      </button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="sm"
      >
        <Modal.Header>
          <Modal.Title>
            Add Feature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.form}>
            <input className={styles.formItem} type="text" placeholder="Project Description" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            <input className={styles.formItem} type="text" placeholder="Project Icon" value={icon} onChange={(e)=>setIcon(e.target.value)}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit} className={styles.submit}>Add Feature</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddFeature;