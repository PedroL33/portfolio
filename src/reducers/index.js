import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import navButtonReducer from './navButtonReducer';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    navText: navButtonReducer
})

export default rootReducer;