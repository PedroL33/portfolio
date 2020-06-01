import React from 'react';
import Project from './project';

function Projects() {

    const trTitle = "RaceTyper"
    const trSummary = "Improve your typing speed. Built with React and Node.js"
    const trFeatures = [{feature:"Token based authentication", icon: "fas fa-lock"}, 
                        {feature: "RESTful API backend to store user data.", icon: "fas fa-database"},
                        {feature:"Animations using the React-Spring library", icon: "fas fa-object-group"}]
    const trLinks = ["https://race-typer.com", "https://github.com/PedroL33/racetyper"]
    const trIcon = "typeracer.png";
    const trTech = ["React", "NodeJS", "MongoDB", "Express", "Redux"]

    const smTitle = "SocialMedia"
    const smSummary = "A simple social media app with posts, comments likes and friends. Built using Ruby on Rails and bootstrap."
    const smFeatures = [{feature:"Photo upload using AWS EC2", icon: "fas fa-camera"}, 
                        {feature: "Secure authentication using Ruby Devise gem", icon: "fas fa-lock"}, 
                        {feature:"Welcome emails using the Ruby on Rails Action Mailer", icon: "far fa-envelope"}];
    const smLinks =  ["https://fierce-bastion-80502.herokuapp.com/", "https://github.com/PedroL33/odin_facebook"];
    const smIcon = "socialmedia.png";
    const smTech = ["Rails", "Postgres", "Bootstrap"]

    const caTitle = "ChatApp"
    const caSummary = "Socialize with your friends in real time.  Created with Node.js, React, and Socket.io."
    const caFeatures = [{feature: "A scalable friendship model using a Neo4j graph database", icon: "fas fa-bezier-curve"},
                        {feature: "Persistent messages stored in MongoDB", icon: "far fa-envelope"},
                        {feature: "Realtime friend updates through SocketIO", icon: "fas fa-history"},
                        {feature: "Token based authentication", icon: "fas fa-lock"}]
    const caLinks = ["https://www.chatapp.site", "https://github.com/PedroL33/chat_app_front"]
    const caIcon = "chatapp.png"
    const caTech = ["React", "MongoDB", "NodeJS", "Express", "Neo4j"]

    return (
        <div>
            <div className="section-spacer"></div>
            <h2 className="text-center mb-5">Projects</h2>
            <div className="row projects-container"> 
                <Project title={trTitle} summary={trSummary} features={trFeatures} links={trLinks} icon={trIcon} tech={trTech} />
                <Project title={smTitle} summary={smSummary} features={smFeatures} links={smLinks} icon={smIcon} tech={smTech} />
                <Project title={caTitle} summary={caSummary} features={caFeatures} links={caLinks} icon={caIcon} tech={caTech} />
            </div>
        </div>
    )
}

export default Projects;
