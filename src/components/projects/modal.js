import React from 'react';
import styles from '../../styles/projectModal.module.css';
import linkStyles from '../../styles/header.module.css';

function Modal(props) {
    return (
      <div className="modal fade modal-container" id={`${props.title}-modal`} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className={linkStyles.projectLinks}>
              <button type="button" className={linkStyles.projectLink} data-dismiss="modal" aria-label="Close">
                <i className="fas fa-times"></i><span aria-hidden="true">&nbsp;Close</span>
              </button>
              <a href={props.links[1]} target="_blank" rel="noopener noreferrer" className={linkStyles.projectLink}>
                <i className="fab fa-github"></i><span>&nbsp;Repo</span>
              </a>
              <a href={props.links[0]} target="_blank" rel="noopener noreferrer" className={linkStyles.projectLink}>
                <i className="fas fa-play"></i><span>&nbsp;Live</span>
              </a>
            </div>
            <div className={styles.container}>
              <div className={styles.header}>
                <h2>{props.title}</h2>
                <hr />
                <div className={styles.summary}>{props.summary}</div>
              </div>
              <div className={`${styles.imageContainer} shadow`}>
                <img className={styles.image} alt={`${props.title} landing page.`} src={window.location.origin + "/images/" + props.img}></img>
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
                    <div className={`${styles.feature} shadow`}>
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