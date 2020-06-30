import UserAPI from "../util/user_api_util";
import { getUser } from "./session_actions";
import { receiveReps } from "./search_actions";

export const RECEIVE_SAVED_REPS = "RECEIVE_SAVED_REPS";
export const RECEIVE_SUB = "RECEIVE_SUB";
export const RECEIVE_PASSPORT_ERROR = "RECEIVE_PASSPORT_ERROR";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";

const receiveSavedReps = (savedReps) => ({
  type: RECEIVE_SAVED_REPS,
  ...savedReps,
});

const receiveSub = (data) => ({
  type: RECEIVE_SUB,
  ...data,
});

const receiveContact = (contact) => ({
  type: RECEIVE_CONTACT,
  contact,
});

export const receivePassportError = (error) => ({
  type: RECEIVE_PASSPORT_ERROR,
  error,
});

export const toggleRepresentative = (id, type) => (dispatch) =>
  UserAPI.toggleSubscribe(id, type)
    .then((res) => {
      const user = getUser(res);
      const { official } = res.data;
      return dispatch(receiveSub({ user, official }));
    })
    .catch((e) => dispatch(receivePassportError(e.response.data)));

export const fetchUserRepresentatives = () => (dispatch) =>
  UserAPI.fetchUserRepresentatives()
    .then((res) => dispatch(receiveReps(res.data)))
    .catch((e) => dispatch(receivePassportError(e.response.data)));

export const toggleContact = () => (dispatch) =>
  UserAPI.toggleContact()
    .then((res) => dispatch(receiveContact(res.data.contact)))
    .catch((e) => dispatch(receivePassportError(e.response.data)));
