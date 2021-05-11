import { combineReducers } from "redux"
import currentPageReducer from './currentPageReducer';
import stickyReducer from './stickyReducer';
import messageResponseReducer from './messageResponse';
import aboutHeaderReducer from "./aboutHeader";
import loginReducer from './login';
import addProjectReducer from './addProject';
import getProjectsRes from './getProject';
import deleteProjectReducer from './deleteProject';
import modalImg from './modalImg';
import thumbImg from './thumbImg';
import currentProject from './currentProject';
import editProject from './editProjectReducer';
import editTech from './editTech';
import editFeatures from './editFeatures';
import projects from './Projects';

const rootReducer = combineReducers({
    currentPage: currentPageReducer,
    sticky: stickyReducer,
    messageResponse: messageResponseReducer,
    aboutHeader: aboutHeaderReducer,
    loginStatus: loginReducer,
    addProject: addProjectReducer,
    getProjectsRes,
    deleteProject: deleteProjectReducer,
    thumbImg,
    modalImg,
    currentProject,
    editProject,
    editTech,
    editFeatures,
    projects
})

export default rootReducer;