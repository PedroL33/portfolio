import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, clearMessageResponse } from '../actions';
import styles from '../styles/contact.module.css';

const Contact = () => {

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const messageResponse = useSelector(state => state.messageResponse);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if(messageResponse.errors) {
      const newErrors = {}
      messageResponse.errors.map(item => {
        newErrors[item.param] = item.msg;
      })
      setFormErrors({...newErrors})
    }else {
      setFormErrors({});
    }
  }, [messageResponse])

  function send() {
    dispatch(sendMessage(message, email, name))
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
          {
          messageResponse.message ? <div className={styles.success}>
            <div>{messageResponse.message}</div>
            <button className={styles.accept} onClick={()=>handleClick("success")}><i className="fas fa-times"></i></button>
          </div> :
          <div className={styles.form}>
            <input className={formErrors["email"] ? styles.invalid: null} type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className={formErrors["name"] ? styles.invalid: null} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <textarea className={formErrors["message"] ? styles.invalid: null} placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}} />
          </div>
          }
        </div>
      </div>
      {messageResponse.message ? null: <button className={styles.button} onClick={() => send()}>Send!</button>}
    </div>
  )
}


export default Contact;