import { getProjects } from './index';
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

export const setThumbImg = (url) => {
  return {
    type: "SET_THUMB_IMG",
    payload: url
  }
}

export const clearThumbImg = () => {
  return {
    type: "CLEAR_THUMB_IMG"
  }
}

export const setModalImg = (url) => {
  return {
    type: "SET_MODAL_IMG",
    payload: url
  }
}

export const clearModalImg = () => {
  return {
    type: "CLEAR_MODAL_IMG"
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
  return async (dispatch) => {
    dispatch(addProjectStart())
    const res = await fetch('http://localhost:3000/project/new', {
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
    const data = await res.json();
    if(data.errors) {
      dispatch(addProjectError(data))
    }else {
      dispatch(addProjectSuccess(data))
    }
  }
}

export const deleteProject = (projects) => {
  return async (dispatch) => {
    dispatch(deleteProjectStart())
    const res = await fetch("http://localhost:3000/project/delete", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json', 
          'Authorization': `bearer: ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
          projects
      })
    })
    const data = await res.json();
    if(data.errors) {
      dispatch(deleteProjectError(data))
    }else {
      dispatch(deleteProjectSuccess(data))
    }
  }
}

export const uploadImage = (id, photo, type) => {

  const url = type=="thumbnail" ? `http://localhost:3000/project/thumbnail/${id}`: `http://localhost:3000/project/modal/${id}`

  return async function(dispatch) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer: ${localStorage.getItem("token")}`,
      },
      body: photo
    })
  }
}