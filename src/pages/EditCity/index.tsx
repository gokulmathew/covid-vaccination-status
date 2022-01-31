import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// Prime react components
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { BreadCrumb } from "primereact/breadcrumb";
// Component imports
import ButtonField from "../../components/Button";
import appConstants from "../../constants/appConstants";
import notificationConstants from "../../constants/notificationConstans";
// Redux Imports
import { visulizationActions } from "../Visualization/visualizationSlice";
import routeConstants from "../../constants/routeConstants";
// Style imports
import styles from "./editcity.module.scss";

export default function EditCity() {
  const toast: any = useRef(null);
  const { state }: any = useLocation();

  let rowData = state && state.rowData;
  let cityList = state && state.cityList;
  let selectedcountry = state && state.country;
  let selectedState = state && state.state;

  const [currentRowData, setCurrentRowData] = useState<any>(rowData);
  const [tableCityList, setTableCurrentCityList] = useState<any>(cityList);

  const updateCityList = (newValue: string | number, key: string) => {
    let tempCityList = JSON.parse(JSON.stringify(tableCityList));
    const index =
      tableCityList &&
      tableCityList.findIndex(
        (cityDetail: any) => cityDetail.id === currentRowData.id
      );
    const data = tempCityList[index];
    let error = false;
    if (key === "vaccinatedPopulation") {
      if (newValue > data.totalPopulation) {
        error = true;
        toast &&
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: notificationConstants.VACCINATED_POPULATION_LIMIT_MESSAGE,
            life: 3000,
          });
        data[key] = data.totalPopulation;
        setTableCurrentCityList(tempCityList);
      }
    } else if (key === "dosesAvailable") {
      if (newValue > appConstants.MAX_DOSES_AVAILABLE_COUNT) {
        error = true;
        toast &&
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: notificationConstants.MAX_DOSES_AVAILABLE_MESSAGE,
            life: 3000,
          });
        data[key] = appConstants.MAX_DOSES_AVAILABLE_COUNT;
        setTableCurrentCityList(tempCityList);
      }
    }
    // Info; Update the value in state only if there is no error
    if (error === false) {
      data[key] = newValue;
      setTableCurrentCityList(tempCityList);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let countriesVaccinationStatusList: any = null;
  countriesVaccinationStatusList = useSelector(
    (state: any) =>
      state &&
      state.visualization &&
      state.visualization.countriesVaccinationStatus
  );

  // function to save all the changes
  const saveChanges = (e: any) => {
    e.preventDefault();
    // Deep clone of object
    let vaccnationStatus = JSON.parse(
      JSON.stringify(countriesVaccinationStatusList)
    );
    vaccnationStatus[selectedcountry.value][selectedState.value] =
      tableCityList;

    dispatch(
      visulizationActions.getCountriesVaccinationStatusSuccess(vaccnationStatus)
    );
    toast &&
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: notificationConstants.DATA_SAVED_MESSAGE,
        life: 3000,
      });
  };

  const breadCrumbItems: any = [];
  tableCityList &&
    tableCityList.forEach((cityDetail: any) => {
      breadCrumbItems.push({
        label: cityDetail.city,
        id: cityDetail.id,
        city: cityDetail.city,
        totalPopulation: cityDetail.totalPopulation,
        vaccinatedPopulation: cityDetail.vaccinatedPopulation,
        dosesAvailable: cityDetail.dosesAvailable,
        command: (e: any) => {
          setCurrentRowData({
            id: e.item.id,
            city: e.item.city,
            totalPopulation: e.item.totalPopulation,
            vaccinatedPopulation: e.item.vaccinatedPopulation,
            dosesAvailable: e.item.dosesAvailable,
          });
        },
        className: `${
          currentRowData.id === cityDetail.id ? styles.breadcrumbUnderline : ""
        }`,
      });
    });

  const home = {
    icon: "pi pi-home",
    command: () => navigate(routeConstants.HOME_PAGE),
  };
  return (
    <div>
      {/* For Toast message */}
      <Toast ref={toast} />
      <BreadCrumb model={breadCrumbItems} home={home} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
            <form>
              <label className="mt-2">{appConstants.CITY_NAME}</label>
              <InputText
                value={
                  (tableCityList &&
                    tableCityList.filter(
                      (cityDetail: any) => cityDetail.id === currentRowData.id
                    )[0].city) ||
                  ""
                }
                onChange={(e: any) => updateCityList(e.target.value, "city")}
                className={`d-block mb-3`}
              />

              <label className="mt-2">{appConstants.TOTAL_POPULATION}</label>
              <InputNumber
                value={
                  (tableCityList &&
                    tableCityList.filter(
                      (cityDetail: any) => cityDetail.id === currentRowData.id
                    )[0].totalPopulation) ||
                  0
                }
                onChange={(e: any) =>
                  updateCityList(e && e.value, "totalPopulation")
                }
                className={`d-block mb-3`}
                inputId="integeronly"
              />

              <label className="mt-2">
                {appConstants.VACCINATED_POPULATION}
              </label>
              <InputNumber
                value={
                  (tableCityList &&
                    tableCityList.filter(
                      (cityDetail: any) => cityDetail.id === currentRowData.id
                    )[0].vaccinatedPopulation) ||
                  0
                }
                onChange={(e: any) =>
                  updateCityList(e && e.value, "vaccinatedPopulation")
                }
                max={
                  (tableCityList &&
                    tableCityList.filter(
                      (cityDetail: any) => cityDetail.id === currentRowData.id
                    )[0].totalPopulation) ||
                  0
                }
                className={`d-block mb-3`}
                inputId="integeronly"
              />

              <label className="mt-2">{appConstants.DOSES_AVAILABLE}</label>
              <InputNumber
                value={
                  (tableCityList &&
                    tableCityList.filter(
                      (cityDetail: any) => cityDetail.id === currentRowData.id
                    )[0].dosesAvailable) ||
                  0
                }
                onChange={(e: any) =>
                  updateCityList(e && e.value, "dosesAvailable")
                }
                max={appConstants.MAX_DOSES_AVAILABLE_COUNT}
                className={`d-block mb-3`}
                inputId="integeronly"
              />

              <ButtonField
                value="Save"
                disable={false}
                onClickFunction={(e) => saveChanges(e)}
                spacingClasses=""
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
