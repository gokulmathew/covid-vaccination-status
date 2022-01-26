import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
// Component imports
import ButtonField from "../../components/Button";
import appConstants from "../../constants/appConstants";
import { visulizationActions } from "../Visualization/visulizationSlice";

export default function EditCity() {
  const { state }: any = useLocation();
  // let { rowData, cityList } = state;
  let rowData = state && state.rowData;
  let cityList = state && state.cityList;

  const [currentRowData, setCurrentRowData] = useState<any>(rowData);

  const [tableCityList, setTableCurrentCityList] = useState<any>(cityList);

  const updateCityList = (newValue: string, key: string) => {
    let tempCityList = [...tableCityList];
    const index =
      tableCityList &&
      tableCityList.findIndex(
        (cityDetail: any) => cityDetail.id === currentRowData.id
      );
    const data = tempCityList[index];
    data[key] = newValue;
    setTableCurrentCityList(tempCityList);
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
    navigate("/");
  };

  return (
    <div className="container">
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
          onChange={(e: any) => updateCityList(e && e.value, "totalPopulation")}
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
          onChange={(e: any) => updateCityList(e && e.value, "dosesAvailable")}
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
  );
}
