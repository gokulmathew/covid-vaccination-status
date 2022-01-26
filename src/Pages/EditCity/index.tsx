import { useState } from "react";
import { useLocation } from "react-router-dom";
// Component imports
import TextField from "../../components/TextField";
import appConstants from "../../constants/appConstants";

export default function EditCity() {
  const { state } = useLocation();
  console.log("state", state);
  const [cityName, setCityName] = useState("");
  return (
    <div className="container">
      <h2>{appConstants.EDIT_PAGE_HEADER}</h2>
      <form>
        <TextField
          label="City Name"
          value={cityName}
          handleOnChange={setCityName}
          disable={false}
          spacingClasses=""
          labelClasses=""
          placeholder=""
          elementClasses=""
        />
      </form>
    </div>
  );
}
