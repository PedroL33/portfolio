const editTech = (state={}, action) => {
  switch(action.type) {
    case "EDIT_TECH_START":
      return {msg: "pending"}
    case "EDIT_TECH_SUCCESS":
      return action.payload
    case "EDIT_TECH_ERROR":
      return action.payload
    case "CLEAR_EDIT_TECH":
      return {};
    default:
      return state;
  }
}

export default editTech;