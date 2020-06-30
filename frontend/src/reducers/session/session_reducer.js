import {
  RECEIVE_CURRENT_USER,
  LOG_OUT_USER,
} from "../../actions/session_actions";
import { RECEIVE_CONTACT, RECEIVE_SUB } from "../../actions/user_actions";

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { user: action.user };
    case LOG_OUT_USER:
      return initialState;
    case RECEIVE_SUB:
      return { user: action.user };
    case RECEIVE_CONTACT:
      newState.user.contact = action.contact;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
