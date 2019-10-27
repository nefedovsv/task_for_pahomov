import { ADD_USER_DATA } from "../constants/index";

export interface IUserData {
  name: string;
  password: string;
}

export interface ISecretKey {
  jwt: string;
  isAuthenticated: boolean;
}

export interface IStore {
  userData: IUserData;
  hasErrored: boolean;
  isLoading: boolean;
  dataSuccess: ISecretKey;
}

export interface IAddUserData {
  type: typeof ADD_USER_DATA;
  payload: IUserData;
}

export interface IRequest {
  type: string;
  payload: {
    hasError?: boolean;
    isLoading?: boolean;
    secretKey?: ISecretKey;
    isAuthenticated?: boolean;
  };
}
