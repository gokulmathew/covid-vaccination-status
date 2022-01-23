import { useState } from "react";
import DropdownField from "../../components/DropdownField";
import countriesList from "../../assets/MockData/countries";
import statesList from "../../assets/MockData/stateList";
import Table from "../../components/Table";
import tamilNaduVacctionStatus from "../../assets/MockData/tamilNaduVaccinationStatus";
import { ToggleButton } from "primereact/togglebutton";
import appConstants from "../../constants/appConstants";

export default function Visualization() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [displayTable, setDisplayTable] = useState(true);

  const columns = [
    {
      field: "city",
      header: "City",
    },
    {
      field: "totalPopulation",
      header: "Total Population",
    },
    {
      field: "vaccinatePopulation",
      header: "Vaccinate Population",
    },
    {
      field: "dosesAvailable",
      header: "Doses Available",
    },
  ];
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
            {/* Country has to be selected to display state dropdown */}
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
          <div className="col-4 text-center">
            {/* State has to be selected to display Toggle  */}
            {state && (
              <ToggleButton
                checked={displayTable}
                onChange={() => setDisplayTable(!displayTable)}
                onLabel={appConstants.chartDisplay}
                offLabel={appConstants.tableDisplay}
                style={{ width: "15rem" }}
              />
            )}
          </div>
        </div>

        {/* Info: Displaying Table after state is selected and displayTable state has to be true */}
        {state && displayTable && (
          <Table data={tamilNaduVacctionStatus} columns={columns} />
        )}
      </div>
    </>
  );
}
