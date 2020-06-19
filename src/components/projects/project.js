import React from 'react';
import Modal from './modal';

function Project(props) {

    return (
      <div className="project-container">
        <div className="project shadow bg-white">
            <div className="project-icon" style={{backgroundImage: `url(${window.location.origin}/images/${props.icon})`}}></div>
            <div className="project-body">
              <h2>{props.title}</h2>
              <div className="project-description">{props.summary}</div>
            </div>
            <button className="project-button" data-toggle="modal" data-target={`#${props.title}-modal`}>Learn More</button>
            <Modal images={props.images} summary={props.summary} title={props.title} features={props.features} tech={props.tech} links={props.links} img={props.img} />
        </div>
      </div>
    )
}

export default Project;