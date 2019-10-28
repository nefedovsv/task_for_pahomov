import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Saga from "../action/addSecretKey";
import rootReducer from "../reducers";
import logger from "redux-logger";
//import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(Saga);
