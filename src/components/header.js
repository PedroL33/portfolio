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
        <h2>Peter Lee</h2>
        <h2>Software Developer</h2>
      </div>
      <div className="fixed-page-links">
        <a className="fixed-page-link" href={window.location.origin + "/Resume.pdf"} target="_blank" style={{background: "#ff9966"}}>
          <span aria-hidden="true">Resume</span>
          <i className="far fa-file-pdf"></i>
        </a>
        <a className="fixed-page-link" href="https://www.linkedin.com/in/peter-lee-2973371a4/" target="_blank" style={{background: "#007bb6"}}>
          <span aria-hidden="true">LinkedIn</span>
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="fixed-page-link" href="https://github.com/PedroL33" target="_blank" style={{background: "#000000"}}>
          <span aria-hidden="true">Github</span>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}

export default Header;