const { RECEIVE_REPS, RECEIVE_REP } = require("../../actions/search_actions");

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");

const officialsReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REPS:
      return action.officials;
    case RECEIVE_REP:
      newState[action.official._id] = action.official;
      delete newState[
        `${formatString(action.official.name)}_${formatString(
          action.official.office
        ).slice(0, 5)}`
      ];
      return newState;
    default:
      return state;
  }
};

export default officialsReducer;
