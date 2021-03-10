import { combineReducers } from "redux";
import filteReduser from "./filterReduser";
import ticketsReduser from "./ticketsReduser";

const rootReduser = combineReducers({
  ticketsReduser,
  filteReduser,
});

export default rootReduser;
