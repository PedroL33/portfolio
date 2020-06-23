const aboutHeaderReducer = (state="about", action) => {
  switch(action.type) {
    case "SET_ABOUT_HEADER":
      return action.payload
    default:
      return state
  }
}

export default aboutHeaderReducer;