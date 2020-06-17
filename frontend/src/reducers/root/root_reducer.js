import { combineReducers } from "redux";

import sessionReducer from "../session/session_reducer";
import errorsReducer from "../errors/errors_reducer";

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
});

export default rootReducer;