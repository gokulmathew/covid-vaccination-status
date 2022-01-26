import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import { visulizationActions } from "../Visualization/visulizationSlice";
import routeConstants from "../../constants/routeConstants";
// Style imports
import styles from "./editcity.module.scss";

export default function EditCity() {
  const toast: any = useRef(null);
  const { state }: any = useLocation();
  // let { rowData, cityList } = state;
  let rowData = state && state.rowData;
  let cityList = state && state.cityList;

  const [currentRowData, setCurrentRowData] = useState<any>(rowData);

  const [tableCityList, setTableCurrentCityList] = useState<any>(cityList);

  const updateCityList = (newValue: string | number, key: string) => {
    let tempCityList = [...tableCityList];
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

  useEffect(() => {
    console.log("tableCityList", tableCityList);
  }, [tableCityList]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveChanges = (e: any) => {
    e.preventDefault();
    dispatch(visulizationActions.getCityListSuccess(tableCityList));
    console.log("tableCityList", tableCityList);
    navigate(routeConstants.homePage);
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
          currentRowData.id == cityDetail.id ? styles.breadcrumbUnderline : ""
        }`,
      });
    });

  const home = {
    icon: "pi pi-home",
    command: () => navigate(routeConstants.homePage),
  };
  return (
    <div>
      <BreadCrumb model={breadCrumbItems} home={home} />
      <div className="container">
        {/* For Toast message */}
        <Toast ref={toast} />
        <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
        <form>
          <label className="mt-2">City Name</label>
          <InputText
            value={
              (tableCityList &&
                tableCityList.filter(
                  (cityDetail: any) => cityDetail.id === currentRowData.id
                )[0].city) ||
              ""
            }
            onChange={(e: any) => updateCityList(e.target.value, "city")}
            className={`d-block mb-2`}
          />

          <label className="mt-2">Total Population</label>
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
            className={`d-block mb-2`}
          />

          <label className="mt-2">Vaccinated Population</label>
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
            className={`d-block mb-2`}
          />

          <label className="mt-2">Doses Available</label>
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
            className={`d-block mb-2`}
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
  );
}
