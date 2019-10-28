import * as Request from "../constants/index";
import { IRequest, ISecretKey, IAddUserData } from "../interfaces/index";
import { addUserData } from "../action/addUserData";
import fetchMock from "fetch-mock";
import { history } from "../components/RouteContainer/IndexRoute";
import { call, put, takeEvery } from "redux-saga/effects";

const defaultSecretKey: ISecretKey = {
  jwt: "86fasfgfsogHGad",
  isAuthenticated: true
};

export default function* Saga() {
  yield takeEvery(Request.USER_ACTION, itemsFetchData);
}

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

function* itemsFetchData(action: IAddUserData) {
  try {
    yield put(addUserData(action.payload));

    yield put(isLoading(true));

    fetchMock.get("*", defaultSecretKey);

    const data: ISecretKey = yield call(() => makeRequest());

    if (data) {
      yield put(isLoading(false));

      localStorage.setItem("jwt", data.jwt);

      yield put(dataSuccess(data));

      fetchMock.reset();
    }
  } catch (e) {
    yield put(hasError(true));
  }
}
