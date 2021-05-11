const getProjectsRes = (state={}, action) => {
  switch(action.type) {
    case "GET_PROJECTS_START":
      return { msg: "pending" };
    case "GET_PROJECTS_SUCCESS":
      return { success: action.payload };
    case "GET_PROJECTS_ERROR":
      return action.payload;
    case "CLEAR_GET_PROJECTS":
      return {};
    default:
      return state
  }
}

export default getProjectsRes;