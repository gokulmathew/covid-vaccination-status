import { useState } from "react";
import DropdownField from "../../Components/DropdownField";
import countriesList from "../../assets/MockData/countries";
import statesList from "../../assets/MockData/stateList";

export default function Visualization() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <DropdownField
              value={country}
              handleOnChange={setCountry}
              disable={false}
              spacingClasses=""
              labelClasses=""
              placeholder="Select Country"
              elementClasses=""
              label=""
              options={countriesList}
            />
          </div>
          <div className="col-4">
            {country && (
              <DropdownField
                value={state}
                handleOnChange={setState}
                disable={false}
                spacingClasses=""
                labelClasses=""
                placeholder="Select State"
                elementClasses=""
                label=""
                options={statesList}
              />
            )}
          </div>
        </div>       
      </div>
    </>
  );
}
