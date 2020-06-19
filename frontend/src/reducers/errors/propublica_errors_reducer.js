import {
  RECEIVE_PROPUBLICA_ERROR,
  RECEIVE_SENATORS,
  RECEIVE_MEMBER,
} from "../../actions/propublica_actions";

const proPublicaErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_PROPUBLICA_ERROR:
      return action.error;
    case RECEIVE_SENATORS:
      return null;
    case RECEIVE_MEMBER:
      return null;
    default:
      return state;
  }
};

export default proPublicaErrorsReducer;
