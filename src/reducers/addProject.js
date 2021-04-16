const addProjectReducer = (state={}, action) => {
  switch(action.type) {
    case "ADD_PROJECT_START":
      return { msg: "pending"}
    case "ADD_PROJECT_SUCCESS":
      return action.payload
    case "ADD_PROJECT_ERROR":
      return action.payload
    case "ADD_PROJECT_CLEAR":
      return {};
    default:
      return state;
  }
}

export default addProjectReducer;