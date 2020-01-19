import { combineReducers } from "redux";
import { isOpen } from "./isOpen";
import { view } from "./view";

export default combineReducers({
  isOpen,
  view
});