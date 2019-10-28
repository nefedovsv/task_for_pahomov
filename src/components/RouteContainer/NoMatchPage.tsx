import React from "react";
import Button from "@material-ui/core/Button";
import { history } from "../RouteContainer/IndexRoute";

export const NoMatchPage: React.FC = (): JSX.Element => {
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
};
