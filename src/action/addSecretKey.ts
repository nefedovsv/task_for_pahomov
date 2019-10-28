import * as Request from "../constants/index";
import { IRequest, IUserData, ISecretKey } from "../interfaces/index";
import { Dispatch } from "redux";
import { addUserData } from "../action/addUserData";
import fetchMock from "fetch-mock";
import { history } from "../components/RouteContainer/IndexRoute";

const makeRequest = async (): Promise<ISecretKey> => {
  const response = await fetch(Request.API_SERVER);
  return response.json();
};

export function hasError(value: boolean): IRequest {
  return {
    type: Request.HAS_ERROR,
    payload: { hasError: value }
  };
}

export function isLoading(value: boolean): IRequest {
  return {
    type: Request.IS_LOADING,
    payload: { isLoading: value }
  };
}

export function dataSuccess(items: {
  jwt: string;
  isAuthenticated: boolean;
}): IRequest {
  return {
    type: Request.DATA_SUCCESS,
    payload: { secretKey: items }
  };
}

export function logOut(): IRequest {
  history.push("/");
  localStorage.clear();
  return {
    type: Request.LOG_OUT,
    payload: { isAuthenticated: false }
  };
}

const defaultSecretKey: ISecretKey = {
  jwt: "86fasfgfsogHGad",
  isAuthenticated: true
};

export function itemsFetchData(userData: IUserData) {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(addUserData(userData));

    dispatch(isLoading(true));

    fetchMock.get("*", defaultSecretKey);

    try {
      const data = await makeRequest();

      if (data) {
        dispatch(isLoading(false));
        localStorage.setItem("jwt", data.jwt);

        dispatch(dataSuccess(data));
      }
      fetchMock.reset();
    } catch (error) {
      dispatch(hasError(true));
    }
  };
}
