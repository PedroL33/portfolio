import React from 'react';
import styles from '../../../styles/projectModal.module.css';

const ModalLinks = (props) => {
    return (
        <div className={styles.gitLinkContainer}>
            <a href={props.project.gitLink} target="_blank" rel="noopener noreferrer" className={styles.gitLink}>
                <i className="fab fa-github"></i>
                &nbsp; Repo
            </a>
        </div>
    )
}

export default ModalLinks;