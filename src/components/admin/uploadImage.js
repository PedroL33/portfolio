import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
import { uploadImage, setModalImg, setThumbImg, clearModalImg, clearThumbImg } from '../../actions/admin';
import { getProjects } from '../../actions';
import styles from '../../styles/project.module.css';
 
function UploadImage(props) {

  const dispatch = useDispatch();
  const imageUrl = useSelector(state => props.type=="thumbnail" ? state.thumbImg: state.modalImg);
  const [file, setFile] = useState(null)

  const clearImg = () => {
    props.type == "thumbnail" ? dispatch(clearThumbImg()): dispatch(clearModalImg())
  }

  const savePhoto = async () => {
    let fd = new FormData();
    fd.append("image", file)
    await dispatch(uploadImage(props.id, fd, props.type))
    props.type == "thumbnail" ? dispatch(clearThumbImg()): dispatch(clearModalImg())
    dispatch(getProjects());
  }

  const handleChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      props.type=="thumbnail" ? dispatch(setThumbImg(window.URL.createObjectURL(e.target.files[0]))):
      dispatch(setModalImg(window.URL.createObjectURL(e.target.files[0])))
    }
  }

  return (
    <div>
      {checkAuth() ? 
        !imageUrl.length ?
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
    </div>
  )
}

export default UploadImage;