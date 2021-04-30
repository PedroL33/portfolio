const editProjects = (state={}, action) => {
  switch(action.type) {
    case "EDIT_PROJECT_START":
      return {msg: "Pending."}
    case "EDIT_PROJECT_SUCCESS":
      return action.payload
    case "EDIT_PROJECT_ERROR":
      return action.payload
    default:
      return state;
  }
}

export default editProjects;