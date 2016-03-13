import { combineReducers } from 'redux';
import PostsReducer from "./reducer_posts";
//import redux-form grab the reducer prop and set it's name to formReducer
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;