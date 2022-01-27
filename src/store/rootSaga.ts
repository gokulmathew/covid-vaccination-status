import { all, fork } from "redux-saga/effects";
import visulizationSaga from "../pages/Visualization/visualizationSaga";

export default function* rootSaga() {
  const sagas = [visulizationSaga];
  yield all(sagas.map((saga) => fork(saga)));
}
