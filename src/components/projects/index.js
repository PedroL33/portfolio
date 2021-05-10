import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import styles from '../../styles/projectIndex.module.css';
import checkAuth from '../../actions/checkAuth';
import AddProject from '../admin/addProjects/addProject';
import { getProjects, setCurrentProject } from '../../actions';
import ProjectModal from './projectModal';
import Loading from '../loading';

function Projects() {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects)
    const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(getProjects());
  }, [])

  const handleClick = (project) => {
    setShow(true)
    dispatch(setCurrentProject(project))
  }

  return (
      <div>
        <div className={styles.header}>
          <div className={styles.sectionDescription}>Here are some of the things I have recently worked on.</div>
        </div>
        <div className={styles.section}> 
          {
            projects.length && !projects.error ? projects.map((item) => 
            <div key={item._id} className={styles.container} onClick={()=>handleClick(item)}>
              <Project
                thumbImg={item.thumbImg}
                title={item.title}
                id={item._id}
              />
            </div>): null
          }
          <ProjectModal show={show} setShow={setShow}/>
          {checkAuth() ? <AddProject /> :null}
        </div>
        <Loading size={100} numCircles={10} />
      </div>
  )
}

export default Projects;
