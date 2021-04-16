import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/login.module.css';
import { login } from '../../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import checkAuth from '../../actions/checkAuth';
 
function Login() {

  const history = useHistory();
  const loginStatus = useSelector(state => state.loginStatus);

  useEffect(() => {
    if(checkAuth()) {
      history.push('/');
    }
  })

  const [password, setPassword] = useState("");
  const [un, setUn] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(login(un, password))

  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {loginStatus.errors ? <span>Auth failed.</span>: null}
        <input onChange={(e) => setUn(e.target.value)} placeholder="Username" className={styles.username} type="text"></input>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className={styles.password}></input>
        <button onClick={e => handleClick(e)} className={styles.submit}>Login</button>
      </div>
    </div>
  )
}

export default Login;