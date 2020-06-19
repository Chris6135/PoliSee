const {
  RECEIVE_REPS,
  CLEAR_ENTITIES,
} = require("../../actions/search_actions");

const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.address;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default addressReducer;
