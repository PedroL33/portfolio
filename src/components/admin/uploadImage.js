import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
import { uploadImage, setModalImg, setThumbImg, clearModalImg, clearThumbImg } from '../../actions/admin';
import { getProjects, setCurrentProject } from '../../actions';
import styles from '../../styles/admin/editProjects.module.css';
 
function UploadImage(props) {

  const dispatch = useDispatch();
  const imageUrl = useSelector(state => props.type=="thumbnail" ? state.thumbImg: state.modalImg);
  const projects = useSelector(state => state.projects);
  const [file, setFile] = useState(null)

  useEffect(() => {
    if(projects.length) {
      dispatch(setCurrentProject(projects.find(item => item._id == props.id)))
    }
  }, [projects])

  const clearImg = () => {
    props.type == "thumbnail" ? dispatch(clearThumbImg()): dispatch(clearModalImg())
  }

  const savePhoto = async (e) => {
    e.stopPropagation();
    let fd = new FormData();
    fd.append("image", file)
    await dispatch(uploadImage(props.id, fd, props.type))
    props.type == "thumbnail" ? dispatch(clearThumbImg()): dispatch(clearModalImg())
    await dispatch(getProjects());
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
        <label className={styles.uploadPhoto} onClick={(e) => e.stopPropagation()}>
            <input onChange={handleChange} style={{display: "none"}} type="file"/>
            <i className="fa fa-cloud-upload"></i>
        </label>
        :
        <div className={styles.uploadPhoto}>
          <i onClick={(e)=>savePhoto(e)} className="far fa-save"></i>
          <i onClick={(e)=>{
            clearImg(e);
            e.stopPropagation();
          }} className="fas fa-times"></i>
        </div>
        :
        null}
    </div>
  )
}

export default UploadImage;