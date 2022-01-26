import { useState } from "react";
import { useLocation } from "react-router-dom";
// Component imports
import NumberField from "../../components/NumberField";
import TextField from "../../components/TextField";
import ButtonField from "../../components/Button";
import appConstants from "../../constants/appConstants";

export default function EditCity() {
  const { state } = useLocation();
  console.log("state", state);
  const [currentCityName, setCurrentCityName] = useState<any>("sdsd");
  const [totalPopulation, settotalPopulation] = useState(0);

  return (
    <div className="container">
      <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
      <form>
        <TextField
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
