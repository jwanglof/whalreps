import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  activeContact: ActiveContactReducer
});

export default rootReducer;
