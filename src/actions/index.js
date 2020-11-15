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
