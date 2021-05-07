import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../styles/admin/editProjects.module.css';

const ChangeFeatures = (props) => {

  const [desc, setDesc] = useState("")
  const [icon, setIcon] = useState("")
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setDesc(props.features[props.idx].description)
    setIcon(props.features[props.idx].icon)
    setShow(true)
  }

  const handleSubmit = () => {
    const newFeature = {
      _id: props.features[props.idx]._id,
      description: desc,
      icon: icon
    }
    props.features.splice(props.idx, 1, newFeature);
    props.setFeatures([...props.features])
    setShow(false)
    setDesc("")
    setIcon("")
  }

  const disabled = () => {
    return props.features[props.idx].description == desc && props.features[props.idx].icon == icon
  }

  return (
    <>
      <div onClick={()=>handleOpen()}>
        <i className="fas fa-pen"></i>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="sm"
      >
        <Modal.Header>
          <Modal.Title>
            Change Feature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.form}>
            <label className={styles.formLabel}>Description</label>
            <input className={styles.formItem} type="text" placeholder="Project Description" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            <label className={styles.formLabel}>Icon</label>
            <input className={styles.formItem} type="text" placeholder="Project Icon" value={icon} onChange={(e)=>setIcon(e.target.value)}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button disabled={disabled()} onClick={handleSubmit} className={styles.submit}>Change Feature</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ChangeFeatures;