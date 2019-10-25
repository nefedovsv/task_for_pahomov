import { ADD_USER_DATA } from "../constants/index";
import { IUserData, IAddUserData } from "../interfaces";

export function addUserData(userData: IUserData): IAddUserData {
  return {
    type: ADD_USER_DATA,
    payload: userData
  };
}
