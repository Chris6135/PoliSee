import CivicsAPI from "../util/civics_api_util";

export const RECEIVE_REPS = "RECEIVE_REPS";
export const RECEIVE_REP = "RECEIVE_REP";

export const RECEIVE_CIVICS_API_ERRORS = "RECEIVE_CIVICS_API_ERRORS";
export const CLEAR_ENTITIES = "CLEAR_ENTITIES";

export const receiveReps = (results) => ({
  type: RECEIVE_REPS,
  ...results,
});

const receiveRep = (official) => ({
  type: RECEIVE_REP,
  official,
});

export const receiveCivicsApiError = (error) => ({
  type: RECEIVE_CIVICS_API_ERRORS,
  ...error,
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
