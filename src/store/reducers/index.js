import { combineReducers } from "redux";
import { isOpen } from "./isOpen";
import { recipe } from "./recipe";

export default combineReducers({
  isOpen,
  recipe
});