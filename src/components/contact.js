import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, clearMessageResponse } from '../actions';
import styles from '../styles/contact.module.css';
import Loading from './loading';

const Contact = () => {

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const messageResponse = useSelector(state => state.messageResponse);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if(messageResponse.errors && messageResponse.errors.length) {
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
      {formErrors.server ? <div className={styles.serverError}>{formErrors.server}</div>:null}
      <div className={styles.container}>
        <div className={styles.left}>
          <i class="far fa-comments"></i>
        </div>
        <div className={styles.formContainer}>
          {
            messageResponse.msg ? <Loading size={350} numCircles={70} />:
            messageResponse.success ? <div className={styles.success}>
              <div>{messageResponse.success}</div>
            <button className={`${styles.accept} fas fa-times`} onClick={()=>handleClick("success")}></button>
            </div>:
            <div className={styles.form}>
              <div className={styles.form__item}>
                {formErrors.email ? <span className={styles.form__error}>{formErrors.email}</span>: null}
                <input className={formErrors.email ? `${styles.invalid} ${styles.form__input}`: styles.form__input} type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className={styles.form__item}>
                {formErrors.name ? <span className={styles.form__error}>{formErrors.name}</span>: null}
                <input className={formErrors.name ? `${styles.invalid} ${styles.form__input}`: styles.form__input} type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className={styles.form__item}>
                {formErrors.message ? <span className={styles.form__error}>{formErrors.message}</span>: null}
                <textarea className={formErrors.message ? `${styles.invalid} ${styles.form__input}`: styles.form__input} placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}} />
              </div>
            </div>
          }
        </div>
      </div>
      {messageResponse.message ? null: <button className={styles.button} onClick={() => send()}>Send!</button>}
    </div>
  )
}


export default Contact;