import { put, takeLatest, call } from "redux-saga/effects";
import {
  getCountryListRequest,
  getCountryListSuccess,
  getCountryListFail,
} from "./visulizationSlice";
import visualizationService from "./visulizationService";

// Generator to get Country list
function* getCountryList(): any {
  try {
    const response = yield call(visualizationService.getCountryList);
    yield put(getCountryListSuccess(response.data));
  } catch (e: any) {
    yield put(getCountryListFail());
  }
}

export default function* watchVisulizationSaga() {
  yield takeLatest(getCountryListRequest.type, getCountryList);
}
