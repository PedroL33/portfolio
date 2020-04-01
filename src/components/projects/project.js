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
        <div>
            <div className="w-50 d-flex project-nav mx-auto">
                <div className="nav-link project-title">
                    {props.title}
                </div>   
                <div className="navbar nav ml-auto">
                    <li>
                        <div className="btn" onMouseOver={(e) => handleMouseEnter(e, "description")} onMouseLeave={(e) => handleMouseLeave(e)}>Description</div>
                    </li>
                    <li>
                        <div className="btn" onMouseOver={(e) => handleMouseEnter(e, "stack")} onMouseLeave={(e) => handleMouseLeave(e)}>Stack</div>
                    </li>
                    <li>
                        <div className="btn">
                            <a href={props.links[1]}>
                                <i class="fab fa-github text-white"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="btn">
                            <a href={props.links[0]}>
                                <i class="fas fa-play text-white"></i>
                            </a>
                        </div>
                    </li>
                </div>
            </div>
            <div className="mx-auto project-container">
                <div>
                    <div ref={overlayRef} className="overlay">
                        <div className="project-content w-75">
                            {current==="description" ? 
                                <div className="text-left">{props.description}</div> : 
                            current==="stack" ? 
                                <div>
                                    <div className="row">
                                    {Object.keys(props.stack).map(key => 
                                        <div className="col-3">
                                            <div className="font-weight-bold"><u>{key}</u></div>
                                            {props.stack[key].map(item => <div>{item}</div>)}
                                        </div>   
                                    )}
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