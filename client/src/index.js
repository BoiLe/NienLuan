import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./redux/saga";
import "./index.css";
import  userReducer  from "./redux/reducers/auth.js";
import  ProductReducer from "./redux/reducers/product.js";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const store = configureStore({
  reducer: {
    product: ProductReducer,
    user: userReducer
    
  },
  middleware:[sagaMiddleware],
});
sagaMiddleware.run(rootsaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
