import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { IUserData } from "../../../interfaces/index";
import { DataForm } from "./DataForm";

export const DataFormContainer: React.FC<{}> = () => {
  const dispatch: Dispatch = useDispatch();

  const init: IUserData = {
    name: "",
    password: ""
  };

  const [userInput, setUserInput] = React.useReducer(
    (state: IUserData, newState): IUserData => ({ ...state, ...newState }),
    init
  );

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    setUserInput({ [name]: value });
  };

  return (
    <DataForm
      handleChange={handleChange}
      userInput={userInput}
      dispatch={dispatch}
    />
  );
};
