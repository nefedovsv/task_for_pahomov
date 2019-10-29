import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";
import { NoMatchPage } from "./NoMatchPage";
import { PrivateRoute } from "./PrivateRoute";
import { Authentication } from "./Authentication";
import { LogOutButton } from "../common/LogOutButton";

export const history = createBrowserHistory({ basename: "task_for_pahomov/" });

export function IndexRoute() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <PrivateRoute path="/profile" component={LogOutButton} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
}
