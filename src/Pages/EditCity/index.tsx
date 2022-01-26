import { useState } from "react";
import { useLocation } from "react-router-dom";
// Component imports
import NumberField from "../../components/NumberField";
import TextField from "../../components/TextField";
import ButtonField from "../../components/Button";
import appConstants from "../../constants/appConstants";
import { InputText } from "primereact/inputtext";

export default function EditCity() {
  const { state }: any = useLocation();
  let { rowData, cityList } = state;
  const [currentRowData, setCurrentRowData] = useState<any>(rowData);

  const [tableCityList, setTableCurrentCityList] = useState<any>(cityList);

  const cityName = tableCityList.filter(
    (cityDetail: any) => cityDetail.id === currentRowData.id
  )[0].city;

  const updateName = (newCityName: string, key: string) => {
    let tempCityList = [...tableCityList];
    const index = tableCityList.findIndex(
      (cityDetail: any) => cityDetail.id === currentRowData.id
    );
    const data = tempCityList[index];
    data[key] = newCityName;
    setTableCurrentCityList(tempCityList);
  };
  return (
    <div className="container">
      <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
      <form>
        <label className="">City Name</label>
        <InputText
          value={cityName}
          onChange={(e: any) => updateName(e.value, "city")}
          className={`d-block mt-2`}
        />

        {/* <TextField
          label="City Name"
          value={currentCityName}
          handleOnChange={setCurrentCityName}
          disable={false}
          spacingClasses=""
          labelClasses=""
          placeholder=""
          elementClasses=""
        />
        <NumberField
          label="Total Population"
          value={totalPopulation}
          handleOnChange={settotalPopulation}
          disable={false}
          spacingClasses="my-3"
          labelClasses=""
          placeholder=""
          elementClasses=""
        />
        <NumberField
          label="Total Population"
          value={totalPopulation}
          handleOnChange={settotalPopulation}
          disable={false}
          spacingClasses="my-3"
          labelClasses=""
          placeholder=""
          elementClasses=""
        />
        <NumberField
          label="Total Population"
          value={totalPopulation}
          handleOnChange={settotalPopulation}
          disable={false}
          spacingClasses="my-3"
          labelClasses=""
          placeholder=""
          elementClasses=""
        /> */}
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
