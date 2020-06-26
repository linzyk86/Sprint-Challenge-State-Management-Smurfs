import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';

const logger = ({getState}) =>next=>action=>{
    console.log("Dispathing action:", action);
    next(action);
};

 let store = createStore(reducer, applyMiddleware(logger, Thunk));


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"));
