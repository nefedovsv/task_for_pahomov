import React from "react";
import { render } from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import { IndexRoute } from "./components/RouteContainer/IndexRoute";

render(
  <Provider store={store}>
    <IndexRoute />
  </Provider>,
  document.getElementById("root")
);
