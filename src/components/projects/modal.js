import React, { useRef } from 'react';
import styles from '../../styles/projectModal.module.css';

function Modal(props) {

  const modalRef = useRef(null);

  function handleClick() {
    modalRef.current.scrollTop = 0;
  }

  return (
    <div className="modal fade modal-container" id={`${props.title}-modal`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <button type="button" className={styles.closeButton} data-dismiss="modal" aria-label="Close" onClick={() => handleClick()}>
            <i className="fas fa-times"></i>
          </button>
          <div className={styles.container} ref={modalRef}>
            <div className={styles.header}>
              <div className={styles.top}>
                <h2>{props.title}</h2>
                <div className={styles.links}>
                  <a href={props.links[0]} target="_blank" rel="noopener noreferrer" className={`${styles.link} fas fa-play`}></a>
                  <a href={props.links[1]} target="_blank" rel="noopener noreferrer" className={`${styles.link} fab fa-github`}></a>
                </div>
              </div>
              <hr />
              <div className={styles.summary}>{props.summary}</div>
            </div>
            <div className={`${styles.imageContainer} shadow`}>
              <img className={styles.image} alt={`${props.title} landing page.`} src={window.location.origin + "/images/" + props.modalImg}></img>
            </div>
            <div className={styles.tech}>
              {props.tech.map(item => (
                <div className={styles.techItem} key={item}>
                  <img alt={`${item} logo.`}src={window.location.origin + "/images/" + item + ".png"} />
                </div>
              ))}
            </div>
            <div className={styles.featuresContainer}>
              <h2>Features...</h2>
              <div className={styles.features}>
                {props.features.map(item => (<div className={styles.featureContainer} key={item.icon}> 
                  <div className={`${styles.feature}`}>
                    <i className={item.icon}></i> 
                    <div className={styles.featureDesc}>{item.feature}</div>
                  </div>
                </div>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;