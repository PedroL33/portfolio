const stickyReducer = (state=false, action) => {
    switch(action.type) {
        case "SET_STICKY":
            return action.payload
        default:
            return state
    }
}

export default stickyReducer;