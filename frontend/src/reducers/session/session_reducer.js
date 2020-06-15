const {
  RECEIVE_CURRENT_USER,
  LOG_OUT_USER,
} = require("../../actions/session_actions");

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { user: action.user };
    case LOG_OUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
