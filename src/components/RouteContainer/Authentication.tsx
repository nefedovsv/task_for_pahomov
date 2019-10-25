import * as React from "react";
import { Redirect } from "react-router";
import { DataForm } from "./DataFormContainer/DataForm";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces";

export const Authentication = (props: any) => {
  const isAuthenticated: boolean = useSelector(
    (store: IStore) => store.dataSuccess.isAuthenticated
  );

  let { from } = props.location.state || {
    from: { pathname: "/profile" }
  };
  if (isAuthenticated) return <Redirect to={from} />;
  return <DataForm />;
};
