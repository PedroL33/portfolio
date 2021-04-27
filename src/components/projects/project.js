import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles/project.module.css';
import checkAuth from '../../actions/checkAuth';
import { uploadThumbnail } from '../../actions/admin';
import { getProjects } from '../../actions';
import ProjectModal from './projectModal';

function Project(props) {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);  
  const [image, setImage] = useState(null)
  const [imgUrl, setImgUrl] = useState("");

  const handleChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      setImgUrl(window.URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files)
    }
  }

  const clearImg = () => {
    setImgUrl("")
    setImage(null)
  }

  const savePhoto = async () => {
    let fd = new FormData();
    fd.append("image", image[0])
    await dispatch(uploadThumbnail(props.project._id, fd))
    setImage(null);
    setImgUrl(null);
    dispatch(getProjects());
  }

  return (
    <div className={styles.container}>
      <img className={styles.siteImg} alt={`Landing page of ${props.project.title}`} src={image ? imgUrl: props.project.thumbImg ? props.project.thumbImg: `${window.location.origin}/images/noImage.jpg`} /> 
      <div className={styles.body}>
        <div className={styles.overlay}>
          {checkAuth() ? 
          !image ?
          <label className={styles.uploadPhoto}>
              <input onChange={handleChange} style={{display: "none"}} type="file"/>
              <i className="fa fa-cloud-upload"></i>
          </label>
          :
          <div className={styles.uploadPhoto}>
            <i onClick={()=>savePhoto()} className="far fa-save"></i>
            <i onClick={()=>clearImg()} className="fas fa-times"></i>
          </div>
          :
          null}
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