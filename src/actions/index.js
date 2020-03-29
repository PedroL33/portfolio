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

export const setText = (text) => {
    return {
        type: "SET_TEXT",
        payload: text
    }
}

export const clearText = () => {
    return {
        type: "CLEAR_TEXT"
    }
}