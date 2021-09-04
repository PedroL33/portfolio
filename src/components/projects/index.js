import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/project.module.css';
import { getProjects, clearGetProjects } from '../../actions';
import ProjectModal from './projectModal/index';
import ProjectHeader from './projectHeader';
import Loading from '../loading';
import ProjectContainer from './projectContainer';
import ProjectErrors from './projectErrors';

const Projects = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const getProjectsRes = useSelector(state => state.getProjectsRes);

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
        <ProjectHeader />
        <div className={styles.section}> 
          {
            getProjectsRes.errors ? <ProjectErrors />:
            getProjectsRes.msg ? <Loading size={100} numCircles={20} />:
            <ProjectContainer setShow={setShow} />
          }
          <ProjectModal show={show} setShow={setShow}/>
        </div>
      </div>
  )
}

export default Projects;
