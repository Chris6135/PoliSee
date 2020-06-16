const { RECEIVE_REPS } = require("../../actions/search_actions");

const officialsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.officials;
    default:
      return state;
  }
};

export default officialsReducer;
