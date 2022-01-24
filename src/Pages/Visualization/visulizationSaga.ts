import { put, takeLatest, call } from "redux-saga/effects";
import {
  getCountryListRequest,
  getCountryListSuccess,
  getCountryListFail,
} from "./visulizationSlice";
import countriesList from "../../assets/MockData/countries";

// import ontologyService from "./service";

// Generator to get Country list
function* getCountryList(action: any) {
  try {
    // const response = yield call(ontologyService.getOntologyList);
    yield put(getCountryListSuccess(countriesList));
  } catch (e: any) {
    yield put(getCountryListFail());
  }
}

export default function* watchVisulizationSaga() {
  yield takeLatest(getCountryListRequest.type, getCountryList);
}
