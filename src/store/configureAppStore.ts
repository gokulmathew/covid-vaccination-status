import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import saga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureAppStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware],
  });
  // Info: You have to run the saga using the created sagaMiddleware
  sagaMiddleware.run(saga);
  return store;
}
