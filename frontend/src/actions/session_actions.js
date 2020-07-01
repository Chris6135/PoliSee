import jwtDecode from "jwt-decode";

import SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_SAVED_REPS = "RECEIVE_SAVED_REPS";
export const RECEIVE_SUB = "RECEIVE_SUB";
export const RECEIVE_PASSPORT_ERROR = "RECEIVE_PASSPORT_ERROR";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";

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

const receiveSavedReps = (savedReps) => ({
  type: RECEIVE_SAVED_REPS,
  ...savedReps,
});

const receiveSub = (data) => ({
  type: RECEIVE_SUB,
  ...data,
});

export const receivePassportError = (error) => ({
  type: RECEIVE_PASSPORT_ERROR,
  error,
});

export const getUser = (res) => {
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
  SessionAPI.editUser(userData).then((res) => {
    dispatch(receiveCurrentUser(getUser(res)));
  });
};

export const toggleContact = () => (dispatch) =>
  SessionAPI.toggleContact()
    .then((res) => dispatch(receiveCurrentUser(getUser(res))))
    .catch((e) => dispatch(receivePassportError(e.response.data)));

export const toggleRepresentative = (id, type) => (dispatch) =>
  SessionAPI.toggleSubscribe(id, type)
    .then((res) => {
      const user = getUser(res);
      const { official } = res.data;
      return dispatch(receiveSub({ user, official }));
    })
    .catch((e) => dispatch(receivePassportError(e.response.data)));

export const fetchUserRepresentatives = () => (dispatch) =>
  SessionAPI.fetchUserRepresentatives()
    .then((res) => dispatch(receiveSavedReps(res.data)))
    .catch((e) => dispatch(receivePassportError(e.response.data)));
