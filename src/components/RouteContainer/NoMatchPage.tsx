import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const NoMatchPage = withRouter(({ history }) => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        history.push("/");
      }}
    >
      Вернуться на главную!
    </Button>
  );
});
