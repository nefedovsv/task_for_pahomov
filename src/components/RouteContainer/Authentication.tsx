import * as React from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { DataFormContainer } from "./DataFormContainer/DataFormContainer";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces";
import { LocationState } from "history";

const defaultLocationState: LocationState = {
  from: { pathname: "/profile" }
};

export const Authentication = (props: RouteComponentProps) => {
  const isAuthenticated: boolean = useSelector(
    (store: IStore) => store.dataSuccess.isAuthenticated
  );

  let { from } = props.location.state || defaultLocationState;

  if (isAuthenticated) return <Redirect to={from} />;
  return <DataFormContainer />;
};
