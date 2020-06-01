import React from 'react';
import Modal from './modal';

function Project(props) {

    return (
        <div className="col-xl-4 col-md-6 project">
            <div className="mx-auto project-container shadow p-3 mb-5 bg-white rounded">
                <div className="project-icon" style={{backgroundImage: `url(${window.location.origin}/images/${props.icon})`}}></div>
                <h2>{props.title}</h2>
                <div className="project-description">{props.summary}</div>
                <button className="btn btn-warning text-white project-button" data-toggle="modal" data-target={`#${props.title}-modal`}>Learn More</button>
                <Modal images={props.images} title={props.title} features={props.features} tech={props.tech} links={props.links} />
            </div>
        </div>
    )
}

export default Project;