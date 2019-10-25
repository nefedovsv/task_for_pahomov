import * as Request from "../constants/index";
import { IRequest, IUserData, ISecretKey } from "../interfaces/index";
import { Dispatch } from "redux";
import { addUserData } from "../action/addUserData";
import fetchMock from "fetch-mock";

const makeRequest = async (): Promise<ISecretKey> => {
  const response = await fetch(`${Request.API_SERVER}`);
  const data: ISecretKey = await response.json();
  return data;
};

export function hasErrored(bool: boolean): IRequest {
  return {
    type: Request.HAS_ERROR,
    payload: { hasErrored: bool }
  };
}

export function isLoading(bool: boolean): IRequest {
  return {
    type: Request.IS_LOADING,
    payload: { isLoading: bool }
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

export function logOut() {
  return {
    type: Request.LOG_OUT,
    payload: { isAuthenticated: false }
  };
}

export function itemsFetchData(userData: IUserData) {
  return (dispatch: Dispatch): any => {
    dispatch(addUserData(userData));

    dispatch(isLoading(true));

    fetchMock.get("*", { jwt: "86fasfgfsogHGad", isAuthenticated: true });

    try {
      makeRequest().then(data => {
        if (data) {
          dispatch(isLoading(false));
          localStorage.setItem("jwt", data.jwt);

          dispatch(dataSuccess(data));
        }
      });

      fetchMock.reset();
    } catch (error) {
      dispatch(hasErrored(true));
    }
  };
}
