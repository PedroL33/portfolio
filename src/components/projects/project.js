import React from 'react';
import Modal from './modal';
import styles from '../../styles/project.module.css';

function Project(props) {

    return (
      <div className={styles.container}>
        <img className={styles.siteImg} src={`${window.location.origin}/images/${props.img}`}></img>  
        <div className={styles.body}>
          <div className={styles.overlay}>
            <button className={styles.title} data-toggle="modal" data-target={`#${props.title}-modal`}>{props.title}</button>
          </div>
          <div className={styles.blur}></div>
        </div>
        <Modal summary={props.summary} title={props.title} features={props.features} tech={props.tech} links={props.links} modalImg={props.modalImg} img={props.img} />
      </div>
    )
}

export default Project;