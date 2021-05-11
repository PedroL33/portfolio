import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a className={styles.icon} href={window.location.origin + "/Resume.pdf"} target="_blank" rel="noopener noreferrer" >
          <i class="far fa-file"></i>
        </a> 
        <div className={styles.words}>Resume</div>
      </div>
      <div className={styles.item}>
        <a className={styles.icon} href="mailto: leepeter019@gmail.com">
          <i class="far fa-envelope"></i>
        </a> 
        <div className={styles.words}>E-mail</div>
      </div>
      <div className={styles.item}>
        <a className={styles.icon} href="https://github.com/PedroL33" target="_blank" rel="noopener noreferrer" >
          <i class="fab fa-github"></i>
        </a> 
        <div className={styles.words}>Github</div>
      </div>
    </div>
  )
}

export default Footer;