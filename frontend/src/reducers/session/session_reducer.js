import { RECEIVE_SUB } from "../../actions/search_actions";

import {
  RECEIVE_CURRENT_USER,
  LOG_OUT_USER,
} from "../../actions/session_actions";

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { user: action.user };
    case LOG_OUT_USER:
      return initialState;
    case RECEIVE_SUB:
      return { user: action.user };
    default:
      return state;
  }
};

export default sessionReducer;
