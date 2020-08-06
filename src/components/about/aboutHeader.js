import React from 'react';
import Typist from 'react-typist';
import {useSelector} from 'react-redux';
import styles from '../../styles/about.module.css';

function AboutHeader() {

  const section = useSelector(state => state.aboutHeader);
  return(
    <div className={`${styles.header} shadow`}>
      {
        section ==="about" ? <Typist key={section}>Who I am...</Typist> :
        section ==="skills" ? <Typist key={section}>What I can offer...</Typist> :
        <Typist key={section}>What I enjoy...</Typist>
      }
    </div>
  )
}

export default AboutHeader;