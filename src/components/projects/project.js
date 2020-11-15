import React from 'react';
import Modal from './modal';
import styles from '../../styles/project.module.css';

function Project(props) {

    return (
      <div className={styles.container}>
        <div className={styles.blur} style={{backgroundImage: `url(${window.location.origin}/images/${props.img})`}}></div>
        <div className={`${styles.body} shadow`}>
          <div className={styles.content}>
          </div>
          <button className={styles.button} data-toggle="modal" data-target={`#${props.title}-modal`}>{props.title}</button>
          <Modal summary={props.summary} title={props.title} features={props.features} tech={props.tech} links={props.links} modalImg={props.modalImg} img={props.img} />
        </div>
      </div>
    )
}

export default Project;