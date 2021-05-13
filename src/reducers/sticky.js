const sticky = (state=false, action) => {
  switch(action.type) {
    case "SET_STICKY":
      return true;
    case "NOT_STICKY":
      return false;
    default:
      return state;
  }
}

export default sticky;