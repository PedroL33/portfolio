const editFeatures = (state={}, action) => {
  switch(action.type) {
    case "EDIT_FEATURES_START":
      return {msg: "pending"};
    case "EDIT_FEATURES_SUCCESS":
      return action.payload;
    case "EDIT_FEATURES_ERROR":
      return action.payload;
    case "EDIT_FEATURES_CLEAR":
      return {};
    default:
      return state
  }
}

export default editFeatures;