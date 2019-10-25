import * as React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../action/addSecretKey";
import { Dispatch } from "redux";
import Button from "@material-ui/core/Button";

export const LogOutButton = withRouter(({ history }) => {
  const dispatch: Dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(logOut());
        history.push("/");
        localStorage.clear();
      }}
    >
      LogOut
    </Button>
  );
});
