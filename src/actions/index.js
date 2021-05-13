export const currentToProjects = () => {
    return {
        type: "CURRENT_TO_PROJECTS"
    }
}

export const currentToAbout = () => {
    return {
        type: "CURRENT_TO_ABOUT"
    }
}

export const currentToContact = () => {
    return {
        type: "CURRENT_TO_CONTACT"
    }
}

export const currentReset= () => {
    return {
        type: "CURRENT_RESET"
    }
}

export const setSticky = () => {
  return {
    type: "SET_STICKY"
  }
}

export const notSticky = () => {
  return {
    type: "NOT_STICKY"
  }
}

export const sendMessageStart = (response) => {
  return {
    type: "SEND_MESSAGE_START",
    payload: response
  }
}

export const sendMessageSuccess = (message) => {
  return {
    type: "SEND_MESSAGE_SUCCESS",
    payload: message
  }
}

export const sendMessageError = (error) => {
  return {
    type: "SEND_MESSAGE_ERROR",
    payload: error
  }
}

export const clearMessageResponse = () => {
    return {
        type: "CLEAR_MESSAGE_RESPONSE"
    }
}

export const setAboutHeader = (section) => {
  return {
    type: "SET_ABOUT_HEADER",
    payload: section
  }
}

export const getProjectsStart = () => {
  return {
    type: "GET_PROJECTS_START"
  }
}

export const getProjectsSuccess = (projects) => {
  return {
    type: "GET_PROJECTS_SUCCESS",
    payload: projects
  }
}

export const getProjectsError = (errors) => {
  return {
    type: "GET_PROJECTS_ERROR",
    payload: errors
  }
}

export const clearGetProjects = () => {
  return {
    type: "CLEAR_GET_PROJECTS"
  }
}

export const setProjects = (projects) => {
  return {
    type: "SET_PROJECTS",
    payload: projects
  }
}

export const clearProjects = () => {
  return {
    type: "CLEAR_PROJECTS"
  }
}

export const setCurrentProject = (project) => {
  return {
    type: "SET_CURRENT_PROJECT",
    payload: project
  }
}

export const getProjects = () => {
  return async dispatch => {
    dispatch(getProjectsStart());
    try {
      const res = await fetch('http://localhost:3000/project/all', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      const data = await res.json();
      if(data.errors) {
        setTimeout(()=> dispatch(getProjectsError(data)), 1500);
      }else {
        setTimeout(() => dispatch(getProjectsSuccess(data)), 1500);
        dispatch(setProjects(data))
      }
    }catch(err) {
      setTimeout(() => dispatch(getProjectsError({errors: "Server error."})), 1500);
    }
  }
}

export const sendMessage = (message, email, name) => {
  return async dispatch => {
    dispatch(sendMessageStart());
    try {
      const res = await fetch('http://localhost:3000/newMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          email,
          name
        })
      })
      const data = await res.json();
      if(data.errors) {
        setTimeout(() => dispatch(sendMessageError(data)), 1500);
      }else {
        setTimeout(() => dispatch(sendMessageSuccess(data)), 1500);
      }
    }catch(err) {
      setTimeout(() => dispatch(sendMessageError({errors: [{param: "server", msg: "Server error."}]})), 1500);
    }
  }
}
