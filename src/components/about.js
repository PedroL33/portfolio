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
                <div className="d-flex align-items-center justify-content-center mx-auto h-100">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={window.location.origin + "/images/greeting.jpg"} className="rounded-circle w-75" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <p>
                                Hey im Peter, I enjoy creating web applications. I am most happy when entangled in a project I am interested in.
                                I am always looking for new people to work with and learn from.  Check out my portfolio to see some of the stuff I have done.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;