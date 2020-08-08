import React from 'react';
import Project from './project';
import styles from '../../styles/project.module.css';

function Projects() {

    const trTitle = "RaceTyper"
    const trSummary = "Improve your typing speed. Built with React and Node.js"
    const trFeatures = [{feature:"Token based authentication", icon: "fas fa-lock"}, 
                        {feature: "RESTful API backend to store user data.", icon: "fas fa-database"},
                        {feature:"Animations using the React-Spring library", icon: "fas fa-object-group"}]
    const trLinks = ["https://race-typer.com", "https://github.com/PedroL33/racetyper"]
    const trImg = "trImg.png"
    const trIcon = "typeracer.png";
    const trTech = ["React", "NodeJS", "MongoDB", "Express", "Redux"]

    const smTitle = "SocialMedia"
    const smSummary = "A simple social media app with posts, comments likes and friends. Built using Ruby on Rails and bootstrap."
    const smFeatures = [{feature:"Photo upload using AWS EC2", icon: "fas fa-camera"}, 
                        {feature: "Secure authentication using Ruby Devise gem", icon: "fas fa-lock"}, 
                        {feature:"Welcome emails using the Ruby on Rails Action Mailer", icon: "far fa-envelope"}];
    const smLinks =  ["https://fierce-bastion-80502.herokuapp.com/", "https://github.com/PedroL33/odin_facebook"];
    const smImg = "smImg.png";
    const smIcon = "socialmedia.png";
    const smTech = ["Rails", "Postgres", "Bootstrap"]

    const caTitle = "ChatApp"
    const caSummary = "Socialize with your friends in real time.  Created with Node.js, React, and Socket.io."
    const caFeatures = [{feature: "A scalable friendship model using a Neo4j graph database", icon: "fas fa-bezier-curve"},
                        {feature: "Persistent messages stored in MongoDB", icon: "far fa-envelope"},
                        {feature: "Realtime friend updates through SocketIO", icon: "fas fa-history"},
                        {feature: "Token based authentication", icon: "fas fa-lock"}]
    const caLinks = ["https://www.chatapp.site", "https://github.com/PedroL33/chat_app_front"]
    const caImg = "caImg.png";
    const caIcon = "chatapp.png"
    const caTech = ["React", "MongoDB", "NodeJS", "Express", "Neo4j"]

    const amTitle = "Able Moving"
    const amSummary = "Web site for a local moving company."
    const amFeatures = [{feature: "Utilizes a zipcode api to allow users to recieve free quotes.", icon: "fas fa-search-location"},
                        {feature: "Real time open and closed status using the moment library.", icon: "fas fa-store-slash"},
                        {feature: "Carefuly developed with responsive design in mind.", icon: "fas fa-mobile-alt"}]
    const amLinks = ["https://dry-brushlands-51041.herokuapp.com/", "https://github.com/PedroL33/able-moving"]
    const amImg = "amImg.png";
    const amIcon = "ablemoving.png"
    const amTech = ["React", "NodeJS", "Express", "Redux"]

    return (
        <div className="projects-section">
            <h2 className={styles.header}>Projects</h2>
            <div className={styles.section}> 
              <Project title={trTitle} summary={trSummary} features={trFeatures} links={trLinks} img={trImg} icon={trIcon} tech={trTech} />
              <Project title={smTitle} summary={smSummary} features={smFeatures} links={smLinks} img={smImg} icon={smIcon} tech={smTech} />
              <Project title={caTitle} summary={caSummary} features={caFeatures} links={caLinks} img={caImg} icon={caIcon} tech={caTech} />
              <Project title={amTitle} summary={amSummary} features={amFeatures} links={amLinks} img={amImg} icon={amIcon} tech={amTech} />
            </div>
        </div>
    )
}

export default Projects;
