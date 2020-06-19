import {
  RECEIVE_REPS,
  RECEIVE_REP,
  RECEIVE_SUB,
} from "../../actions/search_actions";
import {
  RECEIVE_SENATORS,
  RECEIVE_MEMBER,
} from "../../actions/propublica_actions";

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
    case RECEIVE_SUB:
      newState[action.official._id] = action.official;
      return newState;
    case RECEIVE_SENATORS:
      const [sen1, sen2] = action.senators;
      const merged1 = mergePol(newState, sen1);
      const merged2 = mergePol(newState, sen2);
      newState[merged1.id] = merged1;
      newState[merged2.id] = merged2;
      return newState;
    case RECEIVE_MEMBER:
      const merged = mergePol(newState, action.member);
      newState[merged.id] = merged;
      return newState;
    default:
      return state;
  }
};

const mergePol = (state, pol) => {
  const ids = Object.keys(state);
  const polId = ids.find(
    (id) =>
      state[id].name.includes(pol.first_name) &&
      state[id].name.includes(pol.last_name)
  );
  return mergeProperties(state[polId], pol);
};

const mergeProperties = (old, pol) =>
  Object.assign(old, {
    congressId: pol.id,
    nextElection: pol.next_election,
    apiUri: pol.api_uri,
  });

export default officialsReducer;
