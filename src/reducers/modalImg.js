const modalImg = (state="", action) => {
  switch(action.type) {
    case "SET_MODAL_IMG":
      return action.payload;
    case "CLEAR_MODAL_IMG":
      return "";
    default:
      return state;
  }
}

export default modalImg;