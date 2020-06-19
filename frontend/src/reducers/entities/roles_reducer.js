const {
  RECEIVE_REPS,
  CLEAR_ENTITIES,
} = require("../../actions/search_actions");

const rolesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.roles;
    case CLEAR_ENTITIES:
      return {};
    default:
      return state;
  }
};

export default rolesReducer;
