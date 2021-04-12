
export const loginError = (errors) => {
  return {
    type: "POST_LOGIN_ERROR",
    payload: errors
  }
}

export const loginSuccess = (success) => {
  return {
    type: "POST_LOGIN_SUCCESS",
    payload: {msg: success}
  }
}

export const login = (username, password) => {
  return dispatch => {
      fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              password: password
          })
      })
      .then(res => res.json())
      .then( data => {
          if(data.token) {
              localStorage.setItem('token', data.token);
              dispatch(loginSuccess(data.msg))
          }else {
              dispatch(loginError(data));
          }
      })
      .catch(err => {
          dispatch(loginError(err))
      })
  }
}