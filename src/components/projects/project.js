import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/project.module.css';
import ProjectModal from './projectModal';
import UploadImage from '../admin/uploadImage';

function Project(props) {

  const [show, setShow] = useState(false);  
  const thumbImg = useSelector(state => state.thumbImg);

  return (
    <div className={styles.container}>
      <img className={styles.siteImg} alt={`Landing page of ${props.project.title}`} src={thumbImg.length ? thumbImg: props.project.thumbImg ? props.project.thumbImg: `${window.location.origin}/images/noImage.jpg`} /> 
      <div className={styles.body}>
        <div className={styles.overlay}>
          <UploadImage type="thumbnail" id={props.project._id}/>
          <button className={styles.title} onClick={() => setShow(true)}>
            {props.project.title}
          </button>
        </div>
        <div className={styles.blur}></div>
      </div>
      <ProjectModal show={show} setShow={setShow} project={props.project} />
    </div>
  )
}

export default Project;