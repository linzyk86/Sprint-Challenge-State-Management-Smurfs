import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';
import Smurfs from './components/Smurfs';

const logger = ({getState}) =>next=>action=>{
    console.log("Dispathing action:", action);
    next(action);
};

 let store = createStore(reducer, applyMiddleware(logger, thunk));

 function App() {
  return (
    <div className="App">
      <h1>Smurfs</h1>
      <Smurfs />
    </div>
  );
}



ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"));
