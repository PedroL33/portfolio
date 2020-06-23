import React from 'react';

function Modal(props) {
    return (
      <div class="modal fade modal-container" id={`${props.title}-modal`} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="project-links">
              <button type="button" className="project-link" data-dismiss="modal" aria-label="Close">
                <i className="fas fa-times"></i><span aria-hidden="true">&nbsp;Close</span>
              </button>
              <a href={props.links[1]} target="_blank" className="project-link">
                <i className="fab fa-github"></i><span>&nbsp;Repo</span>
              </a>
              <a href={props.links[0]} target="_blank" className="project-link">
                <i className="fas fa-play"></i><span>&nbsp;Live</span>
              </a>
            </div>
            <div className="modal-container">
              <div className="project-body-container">
                <div className="project-body-header">
                  <h2>{props.title}</h2>
                  <hr />
                  <div className="project-header-summary">{props.summary}</div>
                </div>
                <div className="project-img-container shadow">
                  <img className="project-img" src={window.location.origin + "/images/" + props.img}></img>
                </div>
                <div className="tech">
                  {props.tech.map(item => (
                    <div className="tech-item">
                      <img src={window.location.origin + "/images/" + item + ".png"} />
                    </div>
                  ))}
                </div>
                <div className="project-features-container">
                  <h2>Features...</h2>
                  <div className="project-features">
                    {props.features.map(item => (<div className="feature-container"> 
                      <div className="feature shadow">
                        <i className={item.icon}></i> 
                        <div className="feature-desc">{item.feature}</div>
                      </div>
                    </div>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal;