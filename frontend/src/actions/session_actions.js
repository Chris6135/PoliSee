import jwtDecode from "jwt-decode";

import SessionAPI from "../util/session_api_util";
import * as UserAPI from "../util/user_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const logoutUser = () => ({
  type: LOG_OUT_USER,
});

const getUser = (res) => {
  const { token } = res.data;
  localStorage.setItem("jwt", token);
  SessionAPI.setAuthToken(token);
  return jwtDecode(token);
};

export const register = (userData) => (dispatch) =>
  SessionAPI.register(userData)
    .then((res) => dispatch(receiveCurrentUser(getUser(res))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const login = (userData) => (dispatch) =>
  SessionAPI.login(userData)
    .then((res) => dispatch(receiveCurrentUser(getUser(res))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  SessionAPI.setAuthToken(false);
  return dispatch(logoutUser());
};

export const editUser = (userData) => (dispatch) => {
  UserAPI.editUser(userData)
    .then((res) => {
      debugger
      dispatch(receiveCurrentUser(getUser(res)))
    })
}