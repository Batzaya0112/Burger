import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./pages/App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {legacy_createStore as createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from "react-redux";
import burgerReducer from './redux/reducer/burgerReducer';
import orderReducer from './redux/reducer/orderReducer';
import signupReducer from './redux/reducer/signupLoginReducer';
import thunk from 'redux-thunk';
const loggerMiddleware = store => {
  return next => {
    return action => {
      console.log("MyLoggerMiddleware: Dispatching ==> ", action);
      console.log("MyLoggerMiddleware: State before: ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleware: State after: ", store.getState());
      return result;
    }
  }
}
const reducers = combineReducers({
      burgerReducer: burgerReducer,
      orderReducer:  orderReducer,
      signupReducer: signupReducer
});
const middlewares = [thunk, loggerMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
