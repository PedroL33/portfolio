import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import messageResponseReducer from './messageResponse';
import aboutHeaderReducer from "./aboutHeader";

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    messageResponse: messageResponseReducer,
    aboutHeader: aboutHeaderReducer
})

export default rootReducer;