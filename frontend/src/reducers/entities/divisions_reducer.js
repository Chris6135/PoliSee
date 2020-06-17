const { RECEIVE_REPS } = require("../../actions/search_actions");

const divisionsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.divisions;
    default:
      return state;
  }
};

export default divisionsReducer;
