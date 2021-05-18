import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import styles from '../../styles/project.module.css';
import checkAuth from '../../actions/checkAuth';
import AddProject from '../admin/addProjects/addProject';
import { getProjects, clearGetProjects } from '../../actions';
import ProjectModal from './projectModal';
import Loading from '../loading';

function Projects() {

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);
    const getProjectsRes = useSelector(state => state.getProjectsRes);
    const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(getProjects());
  }, [])

  useEffect(() => {
    if(getProjectsRes.success) {
      dispatch(clearGetProjects());
    }
  }, [getProjectsRes])

  return (
      <div>
        <div className={styles.header}>
          <div className={styles.sectionDescription}>Here are some of the things I have recently worked on.</div>
        </div>
        <div className={styles.section}> 
          {
            getProjectsRes.errors ? <div className={styles.errors}>
              <div className={styles.errors__msg}>{getProjectsRes.errors}</div>
              <button className={`${styles.errors__btn} fa fa-refresh`} onClick={() => dispatch(getProjects())}></button>
            </div>:
            getProjectsRes.msg ? <Loading size={100} numCircles={20} />:
            <div className={styles.projectsContainer}>
              {
              projects.length ? projects.map((item) => 
                <Project project={item} setShow={setShow}/>): <div className={styles.notAvailable}>No Projects Yet...</div>
              }
              {checkAuth() ? <AddProject /> :null}
            </div>
          }
          <ProjectModal show={show} setShow={setShow}/>
        </div>
      </div>
  )
}

export default Projects;
