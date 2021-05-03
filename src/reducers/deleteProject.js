const deleteProjectReducer = (state={}, action) => {
  switch(action.type) {
    case "DELETE_PROJECT_START":
      return { msg: "pending"}
    case "DELETE_PROJECT_SUCCESS":
      return action.payload;
    case "DELETE_PROJECT_ERROR":
      return action.payload;
    case "CLEAR_DELETE_PROJECT":
      return {};
    default: 
      return state;
  }
}

export default deleteProjectReducer;