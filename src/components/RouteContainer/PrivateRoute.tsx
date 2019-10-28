import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces";
import { any } from "prop-types";

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
  const isAuthenticated = useSelector((store: IStore) => store.userData);
  const Component: any = component;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
