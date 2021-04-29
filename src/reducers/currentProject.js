const currentProject = (state={}, action) => {
  switch(action.type) {
    case "SET_CURRENT_PROJECT":
      return action.payload
    default: 
      return state;
  }
}

export default currentProject;