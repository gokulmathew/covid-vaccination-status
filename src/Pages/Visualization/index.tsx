import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
// Redux imports
import { visulizationActions } from "./visulizationSlice";
// Component Imports
import Table from "../../components/Table";
import Chart from "../../components/Chart";
import DropdownField from "../../components/DropdownField";
// Constant Imports
import appConstants from "../../constants/appConstants";
import visualizationTableColumns from "../../constants/visualizationTableColumn";

export default function Visualization() {
  const [country, setCountry] = useState<any>(null);
  const [state, setState] = useState<any>(null);
  const [displayTable, setDisplayTable] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Info: Initially making API call to get country list
  useEffect(() => {
    dispatch(visulizationActions.getCountryListRequest());
  }, []);

  // Info: When country is changing, fetching state List
  useEffect(() => {
    dispatch(visulizationActions.getStateListRequest(country && country.value));
    // Info: When country is changed, setting state to null
    setState(null);
  }, [country]);

  // Info: When state is changing, fetching city List
  useEffect(() => {
    dispatch(visulizationActions.getCityListRequest(state && state.value));
  }, [state]);

  let countryList = null;
  countryList = useSelector(
    (state: any) =>
      state && state.visualization && state.visualization.countryList
  );

  let stateList = null;
  stateList = useSelector(
    (state: any) =>
      state && state.visualization && state.visualization.stateList
  );

  let cityList = null;
  cityList = useSelector(
    (state: any) => state && state.visualization && state.visualization.cityList
  );
  cityList = [
    {
      city: "Chennai",
      totalPopulation: 1000,
      vaccinatedPopulation: 500,
      dosesAvailable: 100,
    },
    {
      city: "Coimbatore",
      totalPopulation: 1000,
      vaccinatedPopulation: 500,
      dosesAvailable: 100,
    },
    {
      city: "Madurai",
      totalPopulation: 1000,
      vaccinatedPopulation: 500,
      dosesAvailable: 100,
    },
  ];

  // Function to render Edit button
  const editButton = (rowData: any) => {
    return (
      <Button
        type="button"
        onClick={() => navigate("/edit", { state: rowData })}
        icon="pi pi-fw pi-pencil"
      ></Button>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <p>{appConstants.helpText}</p>
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
              options={countryList}
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
                options={stateList}
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

        {state && (
          <h2>
            {state && state.label}'s
            {appConstants.VisualizationPageHeader}
          </h2>
        )}

        {/* Info: Displaying Table after state is selected and displayTable state has to be true */}
        {/* {state && displayTable && ( */}
        <Table
          data={cityList}
          columns={visualizationTableColumns}
          editButton={editButton}
        />
        {/* )} */}

        {/* Info: Displaying Chart after state is selected and displayTable state has to be false */}
        {state && !displayTable && (
          <Chart
            chartData={cityList}
            chartKey="city"
            dataKey1="totalPopulation"
            dataKey2="vaccinatedPopulation"
            dataKey3="dosesAvailable"
            width={1500}
            height={650}
            barSize={40}
          />
        )}
      </div>
    </>
  );
}
