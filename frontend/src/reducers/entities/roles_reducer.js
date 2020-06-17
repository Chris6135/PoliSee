const { RECEIVE_REPS } = require("../../actions/search_actions");

const rolesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REPS:
      return action.roles;
    default:
      return state;
  }
};

export default rolesReducer;
