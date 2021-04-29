import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import messageResponseReducer from './messageResponse';
import aboutHeaderReducer from "./aboutHeader";
import loginReducer from './login';
import addProjectReducer from './addProject';
import getProjectReducer from './getProject';
import deleteProjectReducer from './deleteProject';
import modalImg from './modalImg';
import thumbImg from './thumbImg';
import currentProject from './currentProject';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    messageResponse: messageResponseReducer,
    aboutHeader: aboutHeaderReducer,
    loginStatus: loginReducer,
    addProject: addProjectReducer,
    projects: getProjectReducer,
    deleteProject: deleteProjectReducer,
    thumbImg,
    modalImg,
    currentProject
})

export default rootReducer;