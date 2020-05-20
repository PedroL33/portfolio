import React from 'react';
import Project from './project';

function Projects() {

    const racetyperImages = ['rt1', 'rt2', 'rt3'];
    const trTitle = "Race Typer"
    const trDescription = "Race-typer is a clone of typeracer.com, an educational typing app. Built React and Node.js"
    const trLinks = ["https://race-typer.com", "https://github.com/PedroL33/odin_facebook"]

    const smTitle = "Social Media"
    const socialmediaImages = ['sm1', 'sm2', 'sm3']
    const smDescription = "A simple social media app with posts, comments likes and friends. Built using Ruby on Rails and bootstrap."
    const smLinks =  ["https://fierce-bastion-80502.herokuapp.com/", "https://github.com/PedroL33/racetyper"];

    const caTitle = "Chat App"
    const caImages = ['ca1', 'ca2', 'ca3']
    const caDescription = "A social chatting app.  Created with Node.js, React, Neo4j and Socket.io."
    const caLinks = ["https://www.chatapp.site", "https://github.com/PedroL33/chat_app_front"]

    return (
        <div>
            <div className="section-spacer"></div>
            <h1 className="text-center mb-5">Projects</h1>
            <div className="row projects-container"> 
                <Project title={trTitle} description={trDescription} images={racetyperImages} links={trLinks}  />
                <Project title={smTitle} description={smDescription} images={socialmediaImages} links={smLinks} />
                <Project title={caTitle} description={caDescription} images={caImages} links={caLinks} />
            </div>
        </div>
    )
}

export default Projects;
