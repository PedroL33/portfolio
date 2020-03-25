import React from 'react';

function Header() {

    const style = {
        background: 'linear-gradient(to right, #000428, #004e92',
        height: '85vh',
        color: 'white'
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={style}>
            <div>
                <h1>Peter Lee</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    )
}

export default Header;