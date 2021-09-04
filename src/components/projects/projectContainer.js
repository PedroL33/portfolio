import React, { useState } from 'react';
import styles from '../../styles/project.module.css';
import { useSelector } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
import AddProject from '../admin/addProjects/addProject';
import Project from './project';

const ProjectContainer = (props) => {

    const projects = useSelector(state => state.projects);

    return (
        <div className={styles.projectsContainer}>
            {
            projects.length ? projects.map((item, idx) => 
                <Project key={idx} project={item} setShow={props.setShow}/>): <div className={styles.notAvailable}>No Projects Yet...</div>
            }
            {checkAuth() ? <AddProject /> :null}
        </div>
    )
}

export default ProjectContainer;