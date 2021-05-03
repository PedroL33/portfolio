const editProjects = (state={}, action) => {
  switch(action.type) {
    case "EDIT_PROJECT_START":
      return {msg: "pending"}
    case "EDIT_PROJECT_SUCCESS":
      return action.payload
    case "EDIT_PROJECT_ERROR":
      return action.payload
    case "CLEAR_EDIT_PROJECT":
      return {};
    default:
      return state;
  }
}

export default editProjects;