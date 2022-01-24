import { put, takeLatest, call } from "redux-saga/effects";
import {
  getCountryListRequest,
  getCountryListSuccess,
  getCountryListFail,
} from "./visulizationSlice";
// import ontologyService from "./service";

// Generator to get Country list
function* getCountryList(action: any) {
  try {
    console.log(" Saga called");
    const { data } = action.payload;
    // const response = yield call(ontologyService.getOntologyList);
    // yield put(getCountryListSuccess(response.data));
  } catch (e: any) {
    yield put(getCountryListFail());
  }
}

export default function* watchVisulizationSaga() {
  yield takeLatest(getCountryListRequest.type, getCountryList);
}
