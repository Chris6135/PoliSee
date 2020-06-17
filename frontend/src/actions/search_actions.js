import CivicsAPI from "../util/civics_api_util";

export const RECEIVE_REPS = "RECEIVE_REPS";
export const RECEIVE_CIVICS_API_ERRORS = "RECEIVE_CIVICS_API_ERRORS";

const receiveReps = (results) => ({
  type: RECEIVE_REPS,
  ...results,
});

export const receiveCivicsApiError = (error) => ({
  type: RECEIVE_CIVICS_API_ERRORS,
  ...error,
});

export const fetchRepresentatives = (address) => (dispatch) =>
  CivicsAPI.representativesByAddress(address)
    .then((res) => {
      const data = CivicsAPI.formatResponse(res.data);
      return dispatch(receiveReps(data));
    })
    .catch((e) => dispatch(receiveCivicsApiError(e.response.data)));
