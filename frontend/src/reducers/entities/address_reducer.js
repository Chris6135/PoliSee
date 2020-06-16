const { RECEIVE_REPS } = require("../../actions/search_actions");

const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.address;
    default:
      return state;
  }
};

export default addressReducer;
