const thumbImg = (state="", action) => {
  switch(action.type) {
    case "SET_THUMB_IMG":
      return action.payload
    case "CLEAR_THUMB_IMG":
      return ""
    default:
      return state;
  }
}

export default thumbImg;