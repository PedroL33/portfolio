
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

export const addProjectStart = () => {
  return {
    type: "ADD_PROJECT_START"
  }
}

export const addProjectSuccess = (message) => {
  return {
    type: "ADD_PROJECT_SUCCESS",
    payload: message
  }
}

export const addProjectError = (errors) => {
  return {
    type: "ADD_PROJECT_ERROR",
    payload: errors
  }
}

export const addProjectClear = () => {
  return {
    type: "ADD_PROJECT_CLEAR"
  }
}

export const deleteProjectStart = () => {
  return {
    type: "DELETE_PROJECT_START"
  }
}

export const deleteProjectSuccess = (success) => {
  return {
    type: "DELETE_PROJECT_SUCCESS",
    payload: success
  }
}

export const deleteProjectError = (error) => {
  return {
    type: "DELETE_PROJECT_ERROR",
    payload: error
  }
}

export const clearDeleteProject = () => {
  return {
    type: "CLEAR_DELETE_PROJECT"
  }
}

export const login = (username, password) => {
  return dispatch => {
    console.log(username)
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

export const addProject = (title, desc, git, live) => {
  return dispatch => {
    dispatch(addProjectStart())
    fetch('http://localhost:3000/project/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `bearer: ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            title: title,
            summary: desc,
            gitLink: git, 
            liveLink: live
        })
    })
    .then(res => res.json())
    .then( data => {
      if(data.errors) {
        dispatch(addProjectError(data))
      }else {
        dispatch(addProjectSuccess(data))
      }
    })
    .catch(err => {
      dispatch(addProjectError({errors: err}))
    })
  }
}

export const deleteProject = (projects) => {
  return dispatch => {
    dispatch(deleteProjectStart())
    fetch("http://localhost:3000/project/delete", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
          'Authorization': `bearer: ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
          projects
      })
    })
    .then(res => res.json())
    .then( data => {
      if(data.errors) {
        dispatch(deleteProjectError(data))
      }else {
        dispatch(deleteProjectSuccess(data))
      }
    }) 
  }
}