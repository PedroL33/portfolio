import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/project.module.css';
import { getProjects } from '../../actions';

const ProjectErrors = () => {

    const dispatch = useDispatch();
    const getProjectsRes = useSelector(state => state.getProjectsRes);

    return (
        <div className={styles.errors}>
            <div className={styles.errors__msg}>{getProjectsRes.errors}</div>
            <button className={`${styles.errors__btn} fa fa-refresh`} onClick={() => dispatch(getProjects())}></button>
        </div>
    )   
}

export default ProjectErrors;