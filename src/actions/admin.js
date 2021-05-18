import zIndex from '@material-ui/core/styles/zIndex';
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

export const editProjectStart = () => {
  return {
    type: "EDIT_PROJECT_START"
  }
}

export const editProjectSuccess = (msg) => {
  return {
    type: "EDIT_PROJECT_SUCCESS",
    payload: msg
  }
}

export const editProjectError = (error) => {
  return {
    type: "EDIT_PROJECT_ERROR",
    payload: error
  }
}

export const clearEditProject = () => {
  return {
    type: "CLEAR_EDIT_PROJECT"
  }
}

export const editTechStart = () => {
  return {
    type: "EDIT_TECH_START"
  }
}

export const editTechSuccess = (msg) => {
  return {
    type: "EDIT_TECH_SUCCESS",
    payload: msg
  }
}

export const editTechError = (error) => {
  return {
    type: "EDIT_TECH_ERROR",
    payload: error
  }
}

export const clearEditTech = () => {
  return {
    type: "CLEAR_EDIT_TECH"
  }
}

export const editFeaturesStart = () => {
  return {
    type: "EDIT_FEATURES_START"
  }
}

export const editFeaturesSuccess = (data) => {
  return {
    type: "EDIT_FEATURES_SUCCESS",
    payload: data
  }
}

export const editFeaturesError = (error) => {
  return {
    type: "EDIT_FEATURES_ERROR",
    payload: error
  }
}

export const editFeaturesClear = () => {
  return {
    type: "EDIT_FEATURES_CLEAR"
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

export const editProject = (changes, id) => {
  return async (dispatch) => {
    dispatch(editProjectStart());
    const res = await fetch(`http://localhost:3000/project/edit/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer: ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(changes)
    })
    const data = await res.json();
    if(data.errors) {
      dispatch(editProjectError(data))
    }else {
      dispatch(editProjectSuccess(data))
    }
  }
}

export const editTech = (tech, id) => {
  return async dispatch => {
    dispatch(editTechStart());
    const res = await fetch(`http://localhost:3000/project/tech/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer: ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(tech)
    })
    const data = await res.json();
    if(data.errors) {
      dispatch(editTechError(data))
    }else {
      dispatch(editTechSuccess(data))
    }
  }
}

export const editFeatures = (features, id) => {
  return async dispatch => {
    dispatch(editFeaturesStart());
    const res = await fetch(`http://localhost:3000/project/features/${id}`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer: ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(features)
    })
    const data = await res.json();
    if(data.errors) {
      dispatch(editFeaturesError(data))
    }else {
      dispatch(editFeaturesSuccess(data))
    }
  }
}