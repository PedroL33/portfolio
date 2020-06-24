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
      // messageRef.current.value=""
      // emailRef.current.value=""
    }
    
    return (
      <div className="stickyItem contact-section">
        <div className="contact-container shadow row">
          <div className="contact-background" style={{backgroundImage: "url("+window.location.origin+"/images/background.jpg)"}}>

          </div>
          <ul className="contact-links col-md-6">
            <li>
              <a className="contact-link-item" href="mailto: leepeter019@gmail.com" data-toggle="tooltip" data-placement="top" title="E-mail" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope-square"></i>
              </a>
            </li>
            <li>
              <a className="contact-link-item" href="https://www.linkedin.com/in/peter-lee-2973371a4/" data-toggle="tooltip" data-placement="top" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a className="contact-link-item" href="https://github.com/PedroL33" data-toggle="tooltip" data-placement="top" title="Github" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
          <div className="col-md-6 p-0">
            <div className="contact-form-container">
              <div className="contact-form-header">Contact Me</div>
              <div className="contact-form">
                <input type="text" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <textarea placeholder="Message" onChange={(e) => {setMessage(e.target.value)}}></textarea>
                <button className="contact-form-button" onClick={() => sendMessage()}>Send!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Contact;