import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App.js";

/*
    https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
