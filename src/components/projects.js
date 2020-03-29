import React from 'react';
import {useSelector} from 'react-redux';
import Slideshow from './slideshow';

function Projects() {

    const sticky = useSelector(state => state.sticky)

    const racetyperImages = ['rt1', 'rt2', 'rt3', 'rt4'];
    const socialmediaImages = ['sm1', 'sm2', 'sm3', 'sm4']
    
    return (
        <div>          
            <div className="text-center my-5 w-75 mx-auto">
                <div class="row mx-auto">
                    <div className="col-md-6 my-5 d-flex align-items-center">
                        <Slideshow images={racetyperImages} />
                    </div>
                    <div class="col d-flex flex-column justify-content-center">
                        <h4>race-typer.com</h4>
                        <p className="text-left mt-5">Race-typer is a clone of typeracer.com, an educational typing app.  
                            Features token based authentication on the back end and a simple user interface. 
                        </p>
                        <p className="text-left">
                            This app was created using the MERN stack with some bootstrap and redux. Deployed with AWS Amplify.
                        </p>
                        <div className="my-5">
                            <a href="https://www.race-typer.com/" className="btn btn-success">Test your typing.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-spacer"></div>
            <div className="text-center w-75 mx-auto">
                <div class="row">
                    <div class="col d-flex flex-column justify-content-center">
                        <h4>Social Media Site</h4>
                        <p className="text-left mt-5">A simple social media app with posts, comments likes and friends.  
                        Shows a strong understanding of relational databases.
                        </p>
                        <p className="text-left">
                            Built with Ruby on Rails and Bootstrap and deployed on Heroku.
                        </p>
                        <div className="my-5">
                            <a href="https://fierce-bastion-80502.herokuapp.com/" className="btn btn-success">Check it out!</a>
                        </div>
                    </div>
                    <div className="col-md-6 my-5 d-flex align-items-center">
                        <Slideshow images={socialmediaImages} />
                    </div>
                </div>
            </div>
            <div className="project-spacer"></div>
            <div class="card text-center w-75 my-5 mx-auto">
                <div className="row">
                    <h4>peterlee.io</h4>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
