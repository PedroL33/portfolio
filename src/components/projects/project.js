import React, {useState} from 'react';
import Slideshow from '../slideshow';
import ReactCardFlip from 'react-card-flip';

function Project(props) {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="col-xl-4 col-md-6 project">
            <div className="mx-auto project-container">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="front shadow mb-5 bg-white rounded" onClick={() => setIsFlipped(!isFlipped)}>
                        <Slideshow images={props.images} />
                    </div>
                    <div className="back shadow rounded mb-5" onClick={() => setIsFlipped(!isFlipped)}>
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
                </ReactCardFlip>
            </div>
        </div>
    )
}

export default Project;