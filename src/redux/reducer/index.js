import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "./userReducer";
import { flightReducer } from "./flightReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  flight: flightReducer,
});
export default rootReducer;
