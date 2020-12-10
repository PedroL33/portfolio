import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessageResponse, clearMessageResponse } from '../actions';
import styles from '../styles/contact.module.css';

function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const messageRef = useRef(null);
    const emailRef = useRef(null);
    const dispatch = useDispatch();
    const messageResponse = useSelector(state => state.messageResponse);

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
        })
      }
    }

    async function handleClick(type) {
      if(type==="success") {
        setEmail("")
        setMessage("")
        messageRef.current.value=""
        emailRef.current.value=""
      }
      await dispatch(clearMessageResponse())
    }

    return (
      <div className="stickyItem contact-section">
        <div className={`${styles.container} shadow`}>
          <div className={styles.background} style={{backgroundImage: "url("+window.location.origin+"/images/background.jpg)"}}></div>
          <ul className={styles.linkContainer}>
            <a className={`fas fa-envelope-square ${styles.link}`} href="mailto: leepeter019@gmail.com" data-toggle="tooltip" data-placement="top" title="E-mail" target="_blank" rel="noopener noreferrer"></a>
            <a className={`fab fa-linkedin-in ${styles.link}`} href="https://www.linkedin.com/in/peter-lee-2973371a4/" data-toggle="tooltip" data-placement="top" title="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
            <a className={`fab fa-github ${styles.link}`} href="https://github.com/PedroL33" data-toggle="tooltip" data-placement="top" title="Github" target="_blank" rel="noopener noreferrer"></a>
          </ul>
          <div className={styles.formContainer}>
            <div className={styles.header}>Contact Me</div>
            {messageResponse.error ? <div className="response-error">
              <button onClick={()=>handleClick("error")}>Ok</button>
            </div> :
            messageResponse.message ? <div className={styles.success}>
              <div>{messageResponse.message}</div>
              <button onClick={()=>handleClick("success")}>Ok</button>
            </div> :
            <div className={styles.form}>
              <input type="text" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>
              <textarea placeholder="Message" onChange={(e) => {setMessage(e.target.value)}}></textarea>
              <button className={styles.button} onClick={() => sendMessage()}>Send!</button>
            </div>
            }
          </div>
        </div>
      </div>
    )
}


export default Contact;