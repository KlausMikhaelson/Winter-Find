import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  signInReducer,
  modelReducer,
  checkAuthReducer,
  caseReducer,
  userReducer,
  collabReducer,
  MedicalReducer,
  VRReducer,
  ARReducer,
  MRReducer,
  OthersReducer,
  CustomcallReducer
  
} from "./components/Redux/reducer";


let rootReducer = combineReducers({
  signInReducer,
  modelReducer,
  checkAuthReducer,
  caseReducer,
  userReducer,
  collabReducer,
  MedicalReducer,
  VRReducer,
  ARReducer,
  MRReducer,
  CustomcallReducer,
  OthersReducer
});
let store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
