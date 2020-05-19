import React from 'react';
import { useSelector } from 'react-redux';

function About() {

    const sticky = useSelector(state => state.sticky);
    const style = {
        padding: "10% 0"
    }
    return (
        <div className={sticky ? "sticky-item text-center" : "text-center"}>
            <div style={style} className="w-75 mx-auto">
                <div className="mx-auto">
                    <div className="shadow bg-white about-info rounded position-relative">
                        <div style={{backgroundImage: `url(${window.location.origin + "/images/greeting.jpg"}`}} className="about-image" />
                        <p>
                            Hey im Peter, I enjoy creating web applications. I am most happy when entangled in a project I am interested in.
                            I am always looking for new people to work with and learn from.  Check out my portfolio to see some of the stuff I have done.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;