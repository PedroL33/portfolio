import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import styles from '../../styles/projectIndex.module.css';
import checkAuth from '../../actions/checkAuth';
import AddProject from '../admin/addProjects/addProject';
import { getProjects } from '../../actions';

function Projects() {

    // const trTitle = "RaceTyper"
    // const trSummary = "A clone of racetyper, an educational speed typing game."
    // const trFeatures = [{feature:"Token based authentication", icon: "fas fa-lock"}, 
    //                     {feature: "RESTful API backend to store user data.", icon: "fas fa-database"},
    //                     {feature:"Animations using the React-Spring library", icon: "fas fa-object-group"}]
    // const trLinks = ["https://race-typer.com", "https://github.com/PedroL33/racetyper"]
    // const trImg = "trFront.png"
    // const trModalImg = "trImg.png"
    // const trTech = ["React", "NodeJS", "MongoDB", "Express", "Redux"]

    // const ecTitle = "Ecommerce"
    // const ecSummary = "A fully functional online store with a backend user interface."
    // const ecFeatures = [{feature: "Secure payments with stripe.", icon: "fas fa-lock"}, 
    //                     {feature:"Photo upload using AWS EC2", icon: "fas fa-camera"}, 
    //                     {feature:"Admin dashboard to view orders and update products.", icon: "far fa-envelope"}];
    // const ecLinks =  ["https://young-savannah-92584.herokuapp.com", "https://github.com/PedroL33/ecommerce-front"];
    // const ecImg = "ecFront.png";
    // const ecModalImg = "ecImg.png"
    // const ecTech = ["React", "MongoDB", "NodeJS", "Express", "Stripe"]

    // const caTitle = "ChatApp"
    // const caSummary = "A realtime chat platform with social networking capabilities."
    // const caFeatures = [{feature: "A scalable friendship model using a Neo4j graph database", icon: "fas fa-bezier-curve"},
    //                     {feature: "Persistent messages stored in MongoDB", icon: "far fa-envelope"},
    //                     {feature: "Realtime friend updates through SocketIO", icon: "fas fa-history"},
    //                     {feature: "Token based authentication", icon: "fas fa-lock"}]
    // const caLinks = ["https://www.chatapp.site", "https://github.com/PedroL33/chat_app_front"]
    // const caImg = "caFront.png";
    // const caModalImg = "caImg.png"
    // const caTech = ["React", "MongoDB", "NodeJS", "Express", "Neo4j"]

    // const amTitle = "Able Moving"
    // const amSummary = "Web site for a local moving company focused on clean design and simple UI."
    // const amFeatures = [{feature: "Utilizes a zipcode api to allow users to recieve free quotes.", icon: "fas fa-search-location"},
    //                     {feature: "Real time open and closed status using the moment library.", icon: "fas fa-store-slash"},
    //                     {feature: "Carefuly developed with responsive design in mind.", icon: "fas fa-mobile-alt"}]
    // const amLinks = ["https://dry-brushlands-51041.herokuapp.com/", "https://github.com/PedroL33/able-moving"]
    // const amImg = "amFront.png";
    // const amModalImg = "amImg.png"
    // const amTech = ["React", "NodeJS", "Express", "Redux"]

    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects)

  useEffect(() => {
    dispatch(getProjects());
  }, [])

  return (
      <div>
        <div className={styles.header}>
          <div className={styles.sectionDescription}>Here are some of the things I have recently worked on.</div>
        </div>
        <div className={styles.section}> 
          {/* <Project title={ecTitle} summary={ecSummary} features={ecFeatures} links={ecLinks} img={ecImg} modalImg={ecModalImg} tech={ecTech} />
          <Project title={caTitle} summary={caSummary} features={caFeatures} links={caLinks} img={caImg} modalImg={caModalImg} tech={caTech} />
          <Project title={amTitle} summary={amSummary} features={amFeatures} links={amLinks} img={amImg} modalImg={amModalImg} tech={amTech} />
          <Project title={trTitle} summary={trSummary} features={trFeatures} links={trLinks} img={trImg} modalImg={trModalImg} tech={trTech} /> */}
          {
            projects.length && !projects.error ? projects.map(item => <Project project={item} />): null
          }
          {checkAuth() ? <AddProject /> :null}
        </div>
      </div>
  )
}

export default Projects;
