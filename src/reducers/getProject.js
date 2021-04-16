const getProjectReducer = (state=[], action) => {
  switch(action.type) {
    case "GET_PROJECT_START":
      return { msg: "pending" }
    case "GET_PROJECT_SUCCESS":
      return action.payload
    case "GET_PROJECT_ERROR":
      return action.payload
    default:
      return state
  }
}

export default getProjectReducer;