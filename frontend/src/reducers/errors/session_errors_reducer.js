const {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} = require("../../actions/session_actions");

const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
