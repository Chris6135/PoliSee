const {
  RECEIVE_REPS,
  CLEAR_ENTITIES,
} = require("../../actions/search_actions");

const divisionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.divisions;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default divisionsReducer;
