import React from 'react';
import Slideshow from '../slideshow';
import Project from './project';

function Projects() {

    const racetyperImages = ['rt1', 'rt2', 'rt3', 'rt4'];
    const trTitle = "Race Typer"
    const trDescription = "Race-typer is a clone of typeracer.com, an educational typing app. Features token based authentication on the back end and a simple user interface."
    const trLinks = ["https://race-typer.com", "https://github.com/PedroL33/odin_facebook"]
    const trStack = {
        Frontend: ["React.js", "Bootstrap"],
        Backend: ["Node.js", "Express", "MongoDB"],
        Libraries: ["React-Spring", "React-Redux", "jsonwebtoken"],
        Deployment: ["AWS-Amplify"]
    }

    const smTitle = "Social Media"
    const socialmediaImages = ['sm1', 'sm2', 'sm3', 'sm4']
    const smDescription = "A simple social media app with posts, comments likes and friends. Shows a strong understanding of relational databases."
    const smLinks =  ["https://fierce-bastion-80502.herokuapp.com/", "https://github.com/PedroL33/racetyper"];
    const smStack = {
        Frontend: ["Bootstrap"],
        Backend: ["Ruby on Rails", "PostgreSQL"],
        Libraries: ["Active Storage", "Devise", "SendGrid"],
        Deployment: ["Heroku"]
    }

    return (
        <div> 
            <div className="project-spacer"></div>
            <Project title={trTitle} description={trDescription} stack={trStack} images={racetyperImages} links={trLinks}  />
            <div className="project-spacer"></div>
            <Project title={smTitle} description={smDescription} stack={smStack} images={socialmediaImages} links={smLinks} />
            <div className="project-spacer"></div>
        </div>
    )
}

export default Projects;
