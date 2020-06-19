import ProPublicaAPI from "../util/propublica_api_util";

export const RECEIVE_SENATORS = "RECEIVE_SENATORS";
export const RECEIVE_MEMBER = "RECEIVE_MEMBER";
export const RECEIVE_PROPUBLICA_ERROR = "RECEIVE_PROPUBLICA_ERROR";

const receiveSenators = (senators) => ({
  type: RECEIVE_SENATORS,
  senators,
});

const receiveMember = (member) => ({
  type: RECEIVE_MEMBER,
  member,
});

const receiveProPublicaError = (error) => ({
  type: RECEIVE_PROPUBLICA_ERROR,
  error,
});

export const fetchSenators = (state) => (dispatch) =>
  ProPublicaAPI.senatorsByState(state)
    // .then((res) => console.log(res)
    .then((res) => dispatch(receiveSenators(res.data.results)))
    // .catch((e) => dispatch(receiveProPublicaError(e.response.data))));

export const fetchMember = (state, cd) => (dispatch) =>
  ProPublicaAPI.memberByDistrict(state, cd)
    .then((res) => dispatch(receiveMember(...res.data.results)))
    .catch((e) => dispatch(receiveProPublicaError(e.response.data)));

// export const fetchSpecificMember = (id) => (dispatch) => ProPublicaAPI.specificMember(id).then()
