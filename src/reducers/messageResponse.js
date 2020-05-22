const messageResponseReducer = (state={}, action) => {
    switch(action.type) {
        case "SET_MESSAGE_RESPONSE":
            return action.payload;
        case "CLEAR_MESSAGE_RESPONSE":
            return {};
        default:
            return state;
    }
}

export default messageResponseReducer;