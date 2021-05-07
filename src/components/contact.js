import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, clearMessageResponse } from '../actions';
import styles from '../styles/contact.module.css';

function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const messageResponse = useSelector(state => state.messageResponse);

    function send() {
      if(message && message.length > 1) {
        dispatch(sendMessage(message, email, name))
      }
    }

    async function handleClick(type) {
      if(type==="success") {
        setEmail("")
        setMessage("")
        setName("");
      }
      await dispatch(clearMessageResponse())
    }

    return (
      <div className="stickyItem contact-section">
        <div className={styles.header}>Get in touch.</div>
        <div className={styles.container}>
          <div className={styles.left}>
            <i class="far fa-comments"></i>
          </div>
          <div className={styles.formContainer}>
            {messageResponse.error ? <div className="response-error">
              <button onClick={()=>handleClick("error")}>Ok</button>
            </div> :
            messageResponse.message ? <div className={styles.success}>
              <div>{messageResponse.message}</div>
              <button onClick={()=>handleClick("success")}>Ok</button>
            </div> :
            <div className={styles.form}>
              <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setEmail(e.target.value)} />
              <textarea placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
            </div>
            }
          </div>
        </div>
        <button className={styles.button} onClick={() => send()}>Send!</button>
      </div>
    )
}


export default Contact;