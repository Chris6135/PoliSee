import {
  RECEIVE_PASSPORT_ERROR,
  RECEIVE_SUB,
} from "../../actions/user_actions";

const passportErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_PASSPORT_ERROR:
      return action.error;
    case RECEIVE_SUB:
      return null;
    default:
      return state;
  }
};

export default passportErrorsReducer;
