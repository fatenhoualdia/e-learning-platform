import { combineReducers } from "redux";
import { userReducer } from "./user";
import coursReducer from "./Cours";
import userlistReducer from "./listuser";
import messageReducer from "./message"
export const rootReducer = combineReducers({
  userReducer,
  coursReducer,
  userlistReducer,messageReducer,
});