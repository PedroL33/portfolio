import React from 'react';

function Header() {

    const style = {
        height: '90vh',
        color: 'white',
        backgroundImage: "url("+window.location.origin+"/images/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
    }

    return (
        <div id="header" className="d-flex justify-content-center flex-column text-center align-items-center" style={style}>
            <div>
                <h1>Peter Lee</h1>
                <h2>Software Developer</h2>
            </div>
            <ul className="navbar nav">
                    <li className="text-center mx-2">
                        <div className="btn">
                            <i className="far fa-file"></i>
                        </div>
                    </li>
                    <li className="text-center mx-2">
                        <div className="btn">
                            <a className="text-white" href="https://www.linkedin.com/in/peter-lee-2973371a4/">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </li>
                    <li className="text-center mx-2">
                        <div className="btn">
                            <a className="text-white" href="https://github.com/PedroL33">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </li>
                </ul>
        </div>
    )
}

export default Header;