import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/project.module.css';
import UploadImage from '../admin/uploadImage';

function Project(props) {

  const thumbImg = useSelector(state => state.thumbImg);

  return (
    <>
      <img className={styles.siteImg} alt={`Landing page of ${props.title}`} src={thumbImg.length ? thumbImg: props.thumbImg ? props.thumbImg: `${window.location.origin}/images/noImage.jpg`} /> 
      <div className={styles.body}>
        <div className={styles.overlay}>
          <UploadImage type="thumbnail" id={props.id}/>
          <div onClick={props.handleClick}>
            {props.title}
          </div>
        </div>
        <div className={styles.blur}></div>
      </div>
    </>
  )
}

export default Project;