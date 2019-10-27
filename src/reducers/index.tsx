import { combineReducers } from "redux";
import { userData } from "./userData";
import { hasError, isLoading, dataSuccess } from "./secretKey";

export default combineReducers({
  userData,
  hasError,
  isLoading,
  dataSuccess
});
