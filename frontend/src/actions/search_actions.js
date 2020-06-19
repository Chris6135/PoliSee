import CivicsAPI from "../util/civics_api_util";
import { getUser } from "./session_actions";

export const RECEIVE_REPS = "RECEIVE_REPS";
export const RECEIVE_REP = "RECEIVE_REP";
export const RECEIVE_SUB = "RECEIVE_SUB";
export const RECEIVE_CIVICS_API_ERRORS = "RECEIVE_CIVICS_API_ERRORS";
export const RECEIVE_PASSPORT_ERROR = "RECEIVE_PASSPORT_ERROR";
export const CLEAR_ENTITIES = "CLEAR_ENTITIES";

const receiveReps = (results) => ({
  type: RECEIVE_REPS,
  ...results,
});

const receiveRep = (official) => ({
  type: RECEIVE_REP,
  official,
});

const receiveSub = (data) => ({
  type: RECEIVE_SUB,
  ...data,
});

export const receiveCivicsApiError = (error) => ({
  type: RECEIVE_CIVICS_API_ERRORS,
  ...error,
});

export const receivePassportError = (error) => ({
  type: RECEIVE_PASSPORT_ERROR,
  error,
});

export const clearEntities = () => ({
  type: CLEAR_ENTITIES,
});

export const fetchRepresentatives = (address) => (dispatch) =>
  CivicsAPI.representativesByAddress(address)
    .then((res) => {
      const data = CivicsAPI.formatResponse(res.data);
      return dispatch(receiveReps(data));
    })
    .catch((e) => dispatch(receiveCivicsApiError(e.response.data)));

export const saveRepresentative = (official) => (dispatch) =>
  CivicsAPI.saveRepresentative(official)
    .then((res) => dispatch(receiveRep(res.data)))
    .catch((e) => dispatch(receiveCivicsApiError(e.response.data)));

export const fetchRepresentative = (id) => (dispatch) =>
  CivicsAPI.fetchRepresentative(id)
    .then((res) => dispatch(receiveRep(res.data)))
    .catch((e) => dispatch(receiveCivicsApiError(e.response.data)));

export const toggleRepresentative = (id, type) => (dispatch) =>
  CivicsAPI.toggleSubscribe(id, type)
    .then((res) => {
      const user = getUser(res);
      const { official } = res.data;
      return dispatch(receiveSub({ user, official }));
    })
    .catch((e) => {
      dispatch(receivePassportError(e.response.data));
    });
