import { combineReducers } from "redux";
import { userData } from "./userData";
import { hasErrored, isLoading, dataSuccess } from "./secretKey";

export default combineReducers({
  userData,
  hasErrored,
  isLoading,
  dataSuccess
});
