const projects = (state=[], action) => {
  switch(action.type) {
    case "SET_PROJECTS":
      return action.payload;
    case "CLEAR_PROJECTS":
      return [];
    default:
      return state;
  }
}

export default projects;