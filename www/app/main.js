import React from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index.js";
import App from "./containers/App.js";


var store  = createStore(reducer, applyMiddleware(logger,thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        ,
        document.getElementById("app")
    )