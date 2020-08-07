import React from 'react';
import Modal from './modal';
import styles from '../../styles/project.module.css';

function Project(props) {

    return (
      <div className={styles.container}>
        <div className={`${styles.body} shadow`}>
          <div className={styles.icon} style={{backgroundImage: `url(${window.location.origin}/images/${props.icon})`}}></div>
          <div className={styles.content}>
            <h2>{props.title}</h2>
            <div className={styles.desc}>{props.summary}</div>
          </div>
          <button className={styles.button} data-toggle="modal" data-target={`#${props.title}-modal`}>Learn More</button>
          <Modal images={props.images} summary={props.summary} title={props.title} features={props.features} tech={props.tech} links={props.links} img={props.img} />
        </div>
      </div>
    )
}

export default Project;