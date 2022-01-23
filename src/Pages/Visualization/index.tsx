import { useState } from "react";
import DropdownField from "../../Components/DropdownField";
export default function Visualization() {
  const [country, setCountry] = useState("");
  const options: any = [];
  return (
    <>
      <p>Viualization</p>

      <DropdownField
        value={country}
        handleOnChange={setCountry}
        disable={false}
        spacingClasses=""
        labelClasses=""
        placeholder=""
        elementClasses=""
        label=""
        options={options}
      />
    </>
  );
}
