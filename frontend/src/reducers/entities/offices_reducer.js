const {
  RECEIVE_REPS,
  RECEIVE_REP,
  CLEAR_ENTITIES,
} = require("../../actions/search_actions");

const formatString = (string) =>
  string.trim().replace(/[\.,]/g, "").replace(/\s/g, "%20");

const officesReducer = (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REPS:
      return action.offices;
    case RECEIVE_REP:
      if (newState[action.official.office]) {
        newState[action.official.office].officials.splice(
          newState[action.official.office].officials.indexOf(
            `${formatString(action.official.name)}_${formatString(
              action.official.office
            ).slice(0, 5)}`
          ),
          1,
          action.official._id
        );
      }
      return newState;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default officesReducer;
