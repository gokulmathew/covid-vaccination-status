import { put, takeLatest, call } from "redux-saga/effects";
import { visulizationActions } from "./visualizationSlice";
import visualizationService from "./visualizationService";

// Generator to get Country Vaccination Status list
function* getCountriesVaccinationStatusList(): any {
  try {
    const response = yield call(
      visualizationService.getCountryiesVaccinationStatusList
    );
    yield put(
      visulizationActions.getCountriesVaccinationStatusSuccess(response.data)
    );
  } catch (e: any) {
    yield put(visulizationActions.getCountriesVaccinationStatusFail());
  }
}

export default function* watchVisulizationSaga() {
  yield takeLatest(
    visulizationActions.getCountriesVaccinationStatusRequest.type,
    getCountriesVaccinationStatusList
  );
}
