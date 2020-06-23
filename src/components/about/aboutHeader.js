import React from 'react';
import Typist from 'react-typist';
import {useSelector} from 'react-redux';

function AboutHeader() {

  const section = useSelector(state => state.aboutHeader);
  return(
    <div className="about-header shadow">
      {
        section ==="about" ? <Typist key={section}>Who I am...</Typist> :
        section ==="skills" ? <Typist key={section}>What I can offer...</Typist> :
        section ==="interests" ? <Typist key={section}>What I enjoy...</Typist> :
        <Typist key={section}>My contact info...</Typist>
      }
    </div>
  )
}

export default AboutHeader;