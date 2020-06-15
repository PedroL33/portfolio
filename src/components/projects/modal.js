import React from 'react';

function Modal(props) {
    return (
        <div class="modal fade modal-container" id={`${props.title}-modal`} tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="project-links">
                    <a href={props.links[1]} target="_blank" className="project-link">
                        <i class="fab fa-github"></i><span>&nbsp;Repo</span>
                    </a>
                    <a href={props.links[0]} target="_blank" className="project-link">
                        <i class="fas fa-play"></i><span>&nbsp;Live</span>
                    </a>
                  </div>
                  <div className="row project-summary">
                    This is the project summary
                  </div>
                  <div className="modal-container row">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                      <div className="project-features col-6">
                          <h2>Features...</h2>
                          <div>
                              {props.features.map(item => (<div className="col-md feature-container"> 
                                  <div className="feature">
                                      <i className={item.icon}></i> 
                                      <div className="feature-desc">{item.feature}</div>
                                  </div>
                              </div>))}
                          </div>
                      </div>
                      <hr />
                      <div className="project-tech col-6">
                        <h2>Created Using...</h2>
                        <div className="tech">
                            {props.tech.map(item => (
                                <div className="tech-item">
                                    <img src={window.location.origin + "/images/" + item + ".png"} />
                                </div>
                            ))}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;