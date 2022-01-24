import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import saga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });
  // Info: You have to run the saga using the created sagaMiddleware
  sagaMiddleware.run(saga);
  return store;
}
