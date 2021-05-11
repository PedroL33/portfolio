const messageResponseReducer = (state={}, action) => {
  switch(action.type) {
    case "SEND_MESSAGE_START":
      return {msg: "pending"};
    case "SEND_MESSAGE_SUCCESS":
      return action.payload;
    case "SEND_MESSAGE_ERROR":
      return action.payload;
    case "CLEAR_MESSAGE_RESPONSE":
        return {};
    default:
        return state;
  }
}

export default messageResponseReducer;