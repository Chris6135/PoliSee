import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import civicsErrorsReducer from "./civics_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  civics: civicsErrorsReducer,
});

export default errorsReducer;
