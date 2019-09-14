import { combineReducers } from "redux";
import boardReducer from './boardReducer';
import userReducer from './userReducer';

export default combineReducers({
    boardReducer ,
    userReducer
})