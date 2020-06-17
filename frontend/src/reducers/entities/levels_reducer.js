const { RECEIVE_REPS } = require("../../actions/search_actions");

const levelsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.levels;
    default:
      return state;
  }
};

export default levelsReducer;
