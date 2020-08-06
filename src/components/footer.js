import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2020 Peter Lee</div> 
      <div>Software Developer</div>
      <div>
        <a href="mailto: leepeter019@gmail.com">leepeter019@gmail.com</a> 
      </div>
      <div>
        Icons made by&nbsp;<a href="https://www.flaticon.com/authors/itim2101" title="itim2101">itim2101</a> 
        &nbsp;and&nbsp;<a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a>
        &nbsp;from&nbsp; <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  )
}

export default Footer;