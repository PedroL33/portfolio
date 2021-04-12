import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import messageResponseReducer from './messageResponse';
import aboutHeaderReducer from "./aboutHeader";
import loginReducer from './login';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    messageResponse: messageResponseReducer,
    aboutHeader: aboutHeaderReducer,
    loginStatus: loginReducer 
})

export default rootReducer;