import { ADD_USER_DATA, USER_ACTION } from "../constants/index";
import { IUserData, IAddUserData } from "../interfaces";

export function addUserData(userData: IUserData): IAddUserData {
  return {
    type: ADD_USER_DATA,
    payload: userData
  };
}

export function userAction(userData: IUserData): IAddUserData {
  return {
    type: USER_ACTION,
    payload: userData
  };
}
