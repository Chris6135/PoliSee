import { combineReducers } from "redux";

import addressReducer from "./address_reducer";
import divisionsReducer from "./divisions_reducer";
import officesReducer from "./offices_reducer";
import officialsReducer from "./officials_reducer";
import levelsReducer from "./levels_reducer";
import rolesReducer from "./roles_reducer";

const entitiesReducer = combineReducers({
  address: addressReducer,
  divisions: divisionsReducer,
  offices: officesReducer,
  officials: officialsReducer,
  levels: levelsReducer,
  roles: rolesReducer,
});

export default entitiesReducer;
