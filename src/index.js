import React from "react";
import ReactDom from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/reducers.js";
import routes from "./routes/routes.js";
import promise from "redux-promise";

//Create redux store
//Apply the redux-promise middleware before actions pass through reducers.
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.querySelector("#app")
);