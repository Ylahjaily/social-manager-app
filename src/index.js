import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import "./app.css";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>

, document.getElementById("index"));