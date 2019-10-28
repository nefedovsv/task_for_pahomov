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
  type: string;
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
