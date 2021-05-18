import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
import { uploadImage } from '../../actions/admin';
import { getProjects } from '../../actions';
import styles from '../../styles/admin/editProjects.module.css';
 
function UploadImage(props) {

  const dispatch = useDispatch();
  const [file, setFile] = useState(null)

  const savePhoto = async (e) => {
    e.stopPropagation();
    let fd = new FormData();
    fd.append("image", file)
    await dispatch(uploadImage(props.id, fd, props.type))
    props.setImg("");
    setFile(null);
    await dispatch(getProjects());
  }

  const handleChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      props.setImg(window.URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <div>
      {checkAuth() ? 
        !props.img || !props.img.length ?
        <label className={styles.uploadPhoto} onClick={(e) => e.stopPropagation()}>
            <input onChange={handleChange} style={{display: "none"}} type="file"/>
            <i className="fa fa-cloud-upload"></i>
        </label>
        :
        <div className={styles.uploadPhoto}>
          <i onClick={(e)=>savePhoto(e)} className="far fa-save"></i>
          <i onClick={(e)=>{
            props.setImg("");
            e.stopPropagation();
          }} className="fas fa-times"></i>
        </div>
        :
        null}
    </div>
  )
}

export default UploadImage;