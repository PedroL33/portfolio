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
        <div id="header" className="d-flex justify-content-center align-items-center" style={style}>
            <div>
                <h1>Peter Lee</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    )
}

export default Header;