import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import navButtonReducer from './navButtonReducer';
import messageResponseReducer from './messageResponse';
import aboutHeaderReducer from "./aboutHeader";

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    navText: navButtonReducer,
    messageResponse: messageResponseReducer,
    aboutHeader: aboutHeaderReducer
})

export default rootReducer;