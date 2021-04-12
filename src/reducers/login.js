const loginReducer = (state="", action) => {
  switch(action.type) {
    case "POST_LOGIN_ERROR":
      return action.payload
    case "POST_LOGIN_SUCCESS":
      return action.payload
    default:
      return state;
  }
}

export default loginReducer;