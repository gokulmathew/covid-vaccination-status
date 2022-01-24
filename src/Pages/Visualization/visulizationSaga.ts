import { put, takeLatest, call } from "redux-saga/effects";
import { visulizationActions } from "./visulizationSlice";
import visualizationService from "./visulizationService";

// Generator to get Country list
function* getCountryList(): any {
  try {
    const response = yield call(visualizationService.getCountryList);
    yield put(visulizationActions.getCountryListSuccess(response.data));
  } catch (e: any) {
    yield put(visulizationActions.getCountryListFail());
  }
}

// Generator to get State list
function* getStateList(action: any): any {
  try {
    const response = yield call(
      visualizationService.getStateList,
      action.payload
    );
    yield put(visulizationActions.getStateListSuccess(response.data));
  } catch (e: any) {
    yield put(visulizationActions.getStateListFail());
  }
}

export default function* watchVisulizationSaga() {
  yield takeLatest(
    visulizationActions.getCountryListRequest.type,
    getCountryList
  );
  yield takeLatest(visulizationActions.getStateListRequest.type, getStateList);
}
