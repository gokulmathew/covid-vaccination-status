import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
// Component imports

import ButtonField from "../../components/Button";
import appConstants from "../../constants/appConstants";

export default function EditCity() {
  const { state }: any = useLocation();
  let { rowData, cityList } = state;
  const [currentRowData, setCurrentRowData] = useState<any>(rowData);

  const [tableCityList, setTableCurrentCityList] = useState<any>(cityList);

  const cityName = tableCityList.filter(
    (cityDetail: any) => cityDetail.id === currentRowData.id
  )[0].city;

  const updateCityList = (newValue: string, key: string) => {
    let tempCityList = [...tableCityList];
    const index = tableCityList.findIndex(
      (cityDetail: any) => cityDetail.id === currentRowData.id
    );
    const data = tempCityList[index];
    data[key] = newValue;
    setTableCurrentCityList(tempCityList);
  };

  useEffect(() => {
    console.log("tableCityList", tableCityList);
  }, [tableCityList]);

  return (
    <div className="container">
      <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
      <form>
        <label className="mt-2">City Name</label>
        <InputText
          value={
            tableCityList.filter(
              (cityDetail: any) => cityDetail.id === currentRowData.id
            )[0].city
          }
          onChange={(e: any) => updateCityList(e.target.value, "city")}
          className={`d-block mb-2`}
        />

        <label className="mt-2">Total Population</label>
        <InputNumber
          value={
            tableCityList.filter(
              (cityDetail: any) => cityDetail.id === currentRowData.id
            )[0].totalPopulation
          }
          onChange={(e: any) => updateCityList(e && e.value, "totalPopulation")}
          className={`d-block mb-2`}
        />

        <label className="mt-2">Vaccinated Population</label>
        <InputNumber
          value={
            tableCityList.filter(
              (cityDetail: any) => cityDetail.id === currentRowData.id
            )[0].vaccinatedPopulation
          }
          onChange={(e: any) =>
            updateCityList(e && e.value, "vaccinatedPopulation")
          }
          className={`d-block mb-2`}
        />

        <label className="mt-2">Doses Available</label>
        <InputNumber
          value={
            tableCityList.filter(
              (cityDetail: any) => cityDetail.id === currentRowData.id
            )[0].dosesAvailable
          }
          onChange={(e: any) => updateCityList(e && e.value, "dosesAvailable")}
          className={`d-block mb-2`}
        />

        <ButtonField
          value="Save"
          disable={false}
          onClickFunction={() => console.log("save")}
          spacingClasses=""
        />
      </form>
    </div>
  );
}
