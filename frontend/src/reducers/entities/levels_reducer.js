const {
  RECEIVE_REPS,
  CLEAR_ENTITIES,
} = require("../../actions/search_actions");

const levelsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.levels;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default levelsReducer;
