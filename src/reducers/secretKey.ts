import * as Request from "../constants/index";
import { IRequest } from "../interfaces/index";

export function hasError(state = false, action: IRequest) {
  switch (action.type) {
    case Request.HAS_ERROR:
      return action.payload.hasError;

    default:
      return state;
  }
}

export function isLoading(state = false, action: IRequest) {
  switch (action.type) {
    case Request.IS_LOADING:
      return action.payload.isLoading;

    default:
      return state;
  }
}

let initialJwt: boolean = false;
const jwt = localStorage.getItem("jwt");
jwt ? (initialJwt = true) : (initialJwt = false);

export function dataSuccess(
  state = { jwt: "", isAuthenticated: initialJwt },
  action: IRequest
) {
  switch (action.type) {
    case Request.DATA_SUCCESS:
      return { ...state, ...action.payload.secretKey };
    case Request.LOG_OUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
