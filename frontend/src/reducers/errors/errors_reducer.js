import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import civicsErrorsReducer from "./civics_errors_reducer";
import passportErrorsReducer from "./passport_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  civics: civicsErrorsReducer,
  passport: passportErrorsReducer,
});

export default errorsReducer;
