import React from 'react';
import Modal from './modal';
import styles from '../../styles/project.module.css';

function Project(props) {

    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.blur} style={{backgroundImage: `url(${window.location.origin}/images/${props.img})`}}></div>
          <div className={styles.overlay}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.links}>
              <div className={styles.buttonContainer}>
                <button className={styles.link} data-toggle="modal" data-target={`#${props.title}-modal`}>
                  <div className={styles.buttonTitle}>Learn more</div>
                  <div className={styles.buttonIcon}>
                    <i className="fas fa-play"></i>
                  </div>
                </button>
              </div>
              <div className={styles.buttonContainer}>
                <a className={styles.link} href={props.links[0]} target="_blank" rel="noopener noreferrer">
                  <div className={styles.buttonTitle}>Live</div>
                  <div className={styles.buttonIcon}>
                    <i className="fas fa-play"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Modal summary={props.summary} title={props.title} features={props.features} tech={props.tech} links={props.links} modalImg={props.modalImg} img={props.img} />
      </div>
    )
}

export default Project;