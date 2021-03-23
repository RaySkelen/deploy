import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className='wrapper'>
        <App />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
