import { ADD_USER_DATA } from "../constants/index";
import { IUserData, IAddUserData } from "../interfaces";

let initialState: IUserData = {
  name: "",
  password: ""
};

export function userData(
  state: IUserData = initialState,
  action: IAddUserData
) {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password
      };
    default:
      return state;
  }
}
