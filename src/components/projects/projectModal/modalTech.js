import React from 'react';
import EditTech from '../../admin/editTech';
import checkAuth from '../../../actions/checkAuth';
import styles from '../../../styles/projectModal.module.css';

const ModalTech = (props) => {

    return (
        <div className={styles.tech}>
            {props.project.tech && props.project.tech.length ? props.project.tech.map(item => (
            <div className={styles.techItem} key={item}>
                {item}
            </div>
            )): <div>No tech yet...</div>}
            {checkAuth() ? <EditTech id={props.project._id}/>: null}
        </div>
    )
}

export default ModalTech;