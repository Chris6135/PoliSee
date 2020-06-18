const { RECEIVE_REPS, RECEIVE_REP } = require("../../actions/search_actions");

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");

const officesReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REPS:
      return action.offices;
    case RECEIVE_REP:
      newState[action.official.office].officials.splice(
        newState[action.official.office].officials.indexOf(
          `${formatString(action.official.name)}_${formatString(
            action.official.office
          ).slice(0, 5)}`
        ),
        1,
        action.official._id
      );
      return newState;
    default:
      return state;
  }
};

export default officesReducer;
