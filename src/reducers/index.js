import { combineReducers } from "redux";
import set from "./set";
import repetition from "./repetition";

const rootReducer = combineReducers({
  set,
  repetition
});

export default rootReducer;
