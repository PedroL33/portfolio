import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer
})

export default rootReducer;