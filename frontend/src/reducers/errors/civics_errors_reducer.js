const {
  RECEIVE_CIVICS_API_ERRORS,
  RECEIVE_REPS,
} = require("../../actions/search_actions");

const civicsErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CIVICS_API_ERRORS:
      return action.error;
    case RECEIVE_REPS:
      return {};
    default:
      return state;
  }
};

export default civicsErrorsReducer;
