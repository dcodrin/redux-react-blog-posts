//Our initial state will hold and emptu array for all posts and we set null for our individual post.

const INITIAL_STATE = {all: [], post: null};

import {FETCH_POSTS, FETCH_POST} from "../actions/index";

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_POST:
            return {...state, post: action.payload.data};
        case FETCH_POSTS:
            //Take our initial state and add to it the data from our action.
            //axios makes a request, gets some data and passes it to redux-promise
            //redux-promise unwraps the promise and passes the data in the payload
            //babel stage-1 preset must be installed
            return {...state, all: action.payload.data};
        default: return state;
    }
}