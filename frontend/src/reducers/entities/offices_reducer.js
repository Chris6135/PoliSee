const { RECEIVE_REPS } = require("../../actions/search_actions");

const officesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.offices;
    default:
      return state;
  }
};

export default officesReducer;
