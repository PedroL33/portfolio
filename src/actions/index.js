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

export const setSticky = (isSticky) => {
    return {
        type: "SET_STICKY",
        payload: isSticky
    }
}

export const setMessageResponse = (response) => {
    return {
        type: "SET_MESSAGE_RESPONSE",
        payload: response
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

export const getProjectStart = () => {
  return {
    type: "GET_PROJECT_START"
  }
}

export const getProjectSuccess = (projects) => {
  return {
    type: "GET_PROJECT_SUCCESS", 
    payload: projects
  }
}

export const getProjectError = (errors) => {
  return {
    type: "GET_PROJECT_ERROR",
    payload: errors
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
    dispatch(getProjectStart());
    const res = await fetch('http://localhost:3000/project/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json();
    if(data.errors) {
      dispatch(getProjectError(data))
    }else {
      dispatch(getProjectSuccess(data))
    }
  }
}

export const sendMessage = (message, email, name) => {
  return async dispatch => {
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
    dispatch(setMessageResponse(data))
  }
}
