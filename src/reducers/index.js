import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import navButtonReducer from './navButtonReducer';
import messageResponseReducer from './messageResponse';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    navText: navButtonReducer,
    messageResponse: messageResponseReducer
})

export default rootReducer;