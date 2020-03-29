const navButtonReducer = (state="", action) => {
    switch(action.type) {
        case "SET_TEXT":
            return action.payload
        case "CLEAR_TEXT":
            return ""
        default:
            return state;
    }
}

export default navButtonReducer