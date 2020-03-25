import React from 'react';
import {useSelector} from 'react-redux';

function Projects() {
    const style = {
        padding: '15vh 0 0 0'
    }

    const sticky = useSelector(state => state.sticky)
    
    return (
        <div id="projects" style={sticky ? style : null}>Projects</div>
    )
}

export default Projects;
