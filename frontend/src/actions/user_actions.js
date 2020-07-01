// import SessionAPI from "../util/session_api_util";
// import { getUser } from "./session_actions";

// export const RECEIVE_SAVED_REPS = "RECEIVE_SAVED_REPS";
// export const RECEIVE_SUB = "RECEIVE_SUB";
// export const RECEIVE_PASSPORT_ERROR = "RECEIVE_PASSPORT_ERROR";
// export const RECEIVE_CONTACT = "RECEIVE_CONTACT";

// const receiveSavedReps = (savedReps) => ({
//   type: RECEIVE_SAVED_REPS,
//   ...savedReps,
// });

// const receiveSub = (data) => ({
//   type: RECEIVE_SUB,
//   ...data,
// });

// export const receivePassportError = (error) => ({
//   type: RECEIVE_PASSPORT_ERROR,
//   error,
// });

// export const toggleRepresentative = (id, type) => (dispatch) =>
//   SessionAPI.toggleSubscribe(id, type)
//     .then((res) => {
//       const user = getUser(res);
//       const { official } = res.data;
//       return dispatch(receiveSub({ user, official }));
//     })
//     .catch((e) => dispatch(receivePassportError(e.response.data)));

// export const fetchUserRepresentatives = () => (dispatch) =>
//   SessionAPI.fetchUserRepresentatives()
//     .then((res) => dispatch(receiveSavedReps(res.data)))
//     .catch((e) => dispatch(receivePassportError(e.response.data)));
