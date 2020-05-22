import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessageResponse, clearMessageResponse } from '../actions';

function Contact() {

    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")
    const messageRef = useRef(null)
    const emailRef = useRef(null)
    const dispatch = useDispatch()
    const messageResponse = useSelector(state => state.messageResponse)

    function sendMessage() {
        if(message && message.length > 1) {
            fetch('https://glacial-reef-28775.herokuapp.com/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message, 
                    email: email
                })
            })
            .then(res => res.json())
            .then(response => {
                dispatch(setMessageResponse(response))
                console.log(response)
            })
        }
    }

    async function handleClick() {
        await dispatch(clearMessageResponse())
        setEmail("")
        setMessage("")
        messageRef.current.value=""
        emailRef.current.value=""
    }
    
    return (
        <div className="stickyItem">
            <div className="section-spacer"></div>
            <div className="contact-container shadow bg-white rounded">
                <h1>Feel free to get in touch!</h1>
                <ul className="contact-links">
                    <li>
                        <a className="contact-link-item" href="mailto: leepeter019@gmail.com" data-toggle="tooltip" data-placement="top" title="E-mail">
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </li>
                    <li>
                        <a className="contact-link-item" href="https://www.linkedin.com/in/peter-lee-2973371a4/" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a className="contact-link-item" href="https://github.com/PedroL33" data-toggle="tooltip" data-placement="top" title="Github">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li data-toggle="tooltip" data-placement="top" title="Personal Message">
                        <span onClick={()=>handleClick()} className="contact-link-item" data-toggle="modal" data-target="#exampleModalCenter">
                            <i className="far fa-sticky-note"></i>
                        </span>
                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Leave me a message!</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {messageResponse.errors ? <div className="response-error">
                                            {messageResponse.errors[0].msg}
                                        </div>: 
                                        messageResponse.message ? <div className="response-success">
                                            <div>{messageResponse.message}</div>
                                            <div>You will be hearing from me soon!</div>
                                        </div>
                                        :<div>
                                            <textarea ref={messageRef} onChange={(e) => setMessage(e.target.value)} placeholder="Whats on your mind..."></textarea>
                                            <input ref={emailRef} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Email"></input>
                                        </div>}
                                    </div>
                                    <div className="modal-footer">
                                        {Object.keys(messageResponse).length ? 
                                        <button type="button" className={messageResponse.errors ? "btn btn-danger": "btn btn-success"} onClick={()=>dispatch(clearMessageResponse())}>Okay</button>
                                        : <button type="button" className="btn btn-primary" onClick={()=>sendMessage()}>Send Message</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="section-spacer"></div>
        </div>
    )
}

export default Contact;