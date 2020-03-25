const currentPageReducer = (state="", action) => {
    switch(action.type) {
        case "CURRENT_TO_PROJECTS":
            return "projects"
        case "CURRENT_TO_ABOUT":
            return "about"
        case "CURRENT_TO_CONTACT":
            return "contact"
        case "CURRENT_RESET":
            return ""
        default:
            return state
    }
}

export default currentPageReducer;