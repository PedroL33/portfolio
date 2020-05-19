import React, {useState, useRef} from 'react';
import Slideshow from '../slideshow';

function Project(props) {
    
    const [current, setCurrent] = useState("")
    const overlayRef = useRef(null);

    function handleMouseEnter(e, type) {
        e.preventDefault()
        setCurrent(type)
        overlayRef.current.style.height = "100%";
        overlayRef.current.style.bottom = 0;
    } 
    
    function handleMouseLeave(e) {
        e.preventDefault()
        overlayRef.current.style.height = 0;
        overlayRef.current.style.right = 0;
        overlayRef.current.style.left = 0;
        overlayRef.current.style.bottom = "100%";
    }

    return (
        <div className="col-xl-4 col-lg-6 project">
            <div className="mx-auto project-container shadow bg-white rounded" onMouseOver={(e) => handleMouseEnter(e, "description")} onMouseLeave={(e) => handleMouseLeave(e)}>
                <div>
                    <div ref={overlayRef} className="overlay">
                        <div className="project-content w-75">
                            {current==="description" ? 
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
                                </div> : null }
                        </div>
                    </div>
                    <Slideshow images={props.images} />
                </div>
            </div>
        </div>
    )
}

export default Project;