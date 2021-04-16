import React from 'react';
import styles from '../../../styles/project.module.css';
import AddModal from './addModal';
import RemoveModal from './removeModal';

function AddProject() {
  return (
    <div className={styles.container}>
      <AddModal />
      <RemoveModal />
    </div>
  )
}

export default AddProject;