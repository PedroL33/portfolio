import React from 'react';
import { useSelector } from 'react-redux';

function Contact() {
    
    return (
        <div className="stickyItem">
            <div className="section-spacer"></div>
            <div className="contact-container shadow bg-white rounded">
                <h1>Feel free to get in touch!</h1>
                <ul className="contact-links">
                    <li>
                        <a className="contact-link-item" href="mailto: leepeter019@gmail.com">
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </li>
                    <li>
                        <a className="contact-link-item" href="https://www.linkedin.com/in/peter-lee-2973371a4/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a className="contact-link-item" href="https://github.com/PedroL33">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="section-spacer"></div>
        </div>
    )
}

export default Contact;