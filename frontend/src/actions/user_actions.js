import * as UserAPI from "../util/user_api_util";

export const RECEIVE_SAVED_REPS = "RECEIVE_SAVED_REPS";

const receiveSavedReps = (savedReps) => ({
  type: RECEIVE_SAVED_REPS,
  ...savedReps
})

export const fetchUserRepresentatives = () => (dispatch) =>
  UserAPI.fetchUserRepresentatives()
    .then((res) => dispatch(receiveSavedReps(res.data)))