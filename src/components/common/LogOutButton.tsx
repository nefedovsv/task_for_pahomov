import * as React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../action/addSecretKey";
import { Dispatch } from "redux";
import Button from "@material-ui/core/Button";

export const LogOutButton: React.FC = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(logOut());
      }}
    >
      LogOut
    </Button>
  );
};
