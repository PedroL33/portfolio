import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
import { uploadImage } from '../../actions/admin';
import { getProjects, setCurrentProject } from '../../actions';
import styles from '../../styles/admin/editProjects.module.css';
 
function UploadImage(props) {

  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const projects = useSelector(state => state.projects);
  const currProject = useSelector(state => state.currentProject)

  useEffect(() => {
    if(projects.length && currProject._id) {
      dispatch(setCurrentProject(projects.find(item => item._id === currProject._id)))
    }
  }, [projects])

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