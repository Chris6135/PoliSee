import React from "react";
import ReactDOM from "react-dom";
import jwtDecode from "jwt-decode";

import "./stylesheets/app.scss";
import "./icons/library";

import SessionAPI from "./util/session_api_util";
import configureStore from "./store/store";
import { logout } from "./actions/session_actions";
import Root from "./components/app/root";
import axios from "axios";


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwt) {
    SessionAPI.setAuthToken(localStorage.jwt);
    const user = jwtDecode(localStorage.jwt);
    const preloadedState = { session: { user: user } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  window.axios = axios;
});