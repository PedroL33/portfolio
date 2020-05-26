import React, {useState, useRef} from 'react';
import Slideshow from '../slideshow';

function Project(props) {

    return (
        <div className="col-xl-4 col-md-6 project">
            <div className="mx-auto project-container">
                <div>
                    <div className="back shadow rounded mb-5 p-3">
                        <div className="project-content w-75">
                            <div>
                                <h1>{props.title}</h1>
                                {props.description}
                                <div className="overlay-links">
                                    <div className="btn">
                                        <a href={props.links[0]}>
                                            <i class="fas fa-play text-white"></i>
                                        </a>
                                    </div>
                                    <div className="btn">
                                        <a href={props.links[1]}>
                                            <i class="fab fa-github text-white"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="front shadow mb-5 p-3 bg-white rounded">
                        <Slideshow images={props.images} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;