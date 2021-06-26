import { combineReducers } from "redux";
import postReducer from "./postReducer";
import useReducer from "./useReducer";

export default combineReducers({
  posts: postReducer,
  users: useReducer,
});
