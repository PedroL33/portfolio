import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import styles from '../../../styles/admin/editProjects.module.css';
import AddFeature from './addFeature';
import ChangeFeature from './changeFeature';
import { editFeatures, editFeaturesClear } from '../../../actions/admin';
import { getProjects, setCurrentProject } from '../../../actions';

const EditFeatures = (props) => {

  const [show, setShow] = useState(false);
  const project = useSelector(state => state.currentProject);
  const editFeaturesRes = useSelector(state => state.editFeatures);
  const [features, setFeatures] = useState([]);
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if(editFeaturesRes.errors) {
      setErrors(editFeatures.errors);
    }else if(editFeaturesRes.success) {
      dispatch(setCurrentProject(editFeaturesRes.success));
      setShow(false);
      setErrors("");
      dispatch(getProjects());
      return ( () => {
        dispatch(editFeaturesClear());
      })
    }
  }, [editFeaturesRes])

  const handleOpen = () => {
    setShow(true);
    setFeatures([...project.features]);
    setErrors("");
  }

  const removeFeature = (feature) => {
    const newFeatures = features.filter(item => item.icon != feature.icon && item.description != feature.description)
    setFeatures([...newFeatures]);
  }

  const disabled = () => {
    return JSON.stringify(project.features) === JSON.stringify(features)
  }

  const handleSubmit = () => {
    dispatch(editFeatures(features, props.id));
  }

  return (
    <>
      <div className={styles.editFeatures} onClick={()=>handleOpen()}>
        <i className='fas fa-plus'></i>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Features 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {errors.length ? <div className={styles.errors}>{errors}</div>: null}
          <div className={styles.currentFeatures}>
            {
            features && features.length ? features.map((item, idx) => 
              <div className={styles.feature}>
                <div className={styles.featureIcon}><i className={item.icon}></i></div>
                <div className={styles.featureDesc}>{item.description}</div>
                <div className={styles.editButtons}>
                  <i className="fas fa-times" onClick={()=>removeFeature(item)}></i>
                  <ChangeFeature idx={idx} features={features} setFeatures={setFeatures} />
                </div>
              </div>): 
              <div>No Features Yet</div>
            }
          </div>
          <div className={styles.submitContainer}>
            <AddFeature features={features} setFeatures={setFeatures} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={()=>handleSubmit()} disabled={disabled()} className={styles.submit}>Save Changes</button>
        </Modal.Footer>
      </Modal>
    </> 
  )
}

export default EditFeatures;