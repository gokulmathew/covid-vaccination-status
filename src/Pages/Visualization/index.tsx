import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
// Redux imports
import { visulizationActions } from "./visualizationSlice";
// Component Imports
import Table from "../../components/Table";
import Chart from "../../components/Chart";
import DropdownField from "../../components/DropdownField";
// Constant Imports
import appConstants from "../../constants/appConstants";
import visualizationTableColumns from "../../constants/visualizationTableColumn";

export default function Visualization() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let countriesVaccinationStatusList: any = null;
  countriesVaccinationStatusList = useSelector(
    (state: any) =>
      state &&
      state.visualization &&
      state.visualization.countriesVaccinationStatus
  );

  // Storing the zeroth value in country and state dropdown
  const [country, setCountry] = useState<any>({
    label:
      countriesVaccinationStatusList &&
      Object.keys(countriesVaccinationStatusList)[0],
    value:
      countriesVaccinationStatusList &&
      Object.keys(countriesVaccinationStatusList)[0],
  });
  const [state, setState] = useState<any>({
    label:
      countriesVaccinationStatusList &&
      country &&
      Object.keys(countriesVaccinationStatusList[country.value])[0],
    value:
      countriesVaccinationStatusList &&
      Object.keys(countriesVaccinationStatusList[country.value])[0],
  });
  const [displayTable, setDisplayTable] = useState(true);

  // Info: Initially making API call to get countries Vaccination status data
  useEffect(() => {
    if (
      countriesVaccinationStatusList == null ||
      Object.keys(countriesVaccinationStatusList).length === 0
    )
      dispatch(visulizationActions.getCountriesVaccinationStatusRequest());
  }, []);

  // Info: Storing Country List
  let countryList: any = [];
  Object.keys(countriesVaccinationStatusList).forEach((country: any) => {
    countryList.push({ label: country, value: country });
  });

  // Info: Storing State  List
  let stateList: any = [];
  countriesVaccinationStatusList &&
    country &&
    Object.keys(countriesVaccinationStatusList[country.value]).forEach(
      (state: any) => {
        stateList.push({ label: state, value: state });
      }
    );

  // Updating state dropdown when ever country is changed
  useEffect(() => {
    setState({
      label:
        countriesVaccinationStatusList &&
        country &&
        Object.keys(countriesVaccinationStatusList[country.value])[0],
      value:
        countriesVaccinationStatusList &&
        Object.keys(countriesVaccinationStatusList[country.value])[0],
    });
  }, [country]);

  // Info: Storing City List
  let cityList: any = [];
  cityList =
    countriesVaccinationStatusList &&
    country &&
    state &&
    countriesVaccinationStatusList[country.value][state.value];

  // Function to render Edit button
  const editButton = (rowData: any) => {
    return (
      <Button
        type="button"
        onClick={() =>
          navigate("/edit", { state: { rowData, cityList, country, state } })
        }
        icon="pi pi-fw pi-pencil"
      ></Button>
    );
  };
  return (
    <>
      <div className="container-fluid">
        <p>{appConstants.HELP_TEXT}</p>
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
                onLabel={appConstants.CHART_DISPLAY}
                offLabel={appConstants.TABLE_DISPLAY}
                style={{ width: "15rem" }}
              />
            )}
          </div>
        </div>

        {state && (
          <h2>
            {state && state.label}'s
            {appConstants.VISUALIZATION_PAGE_HEADER}
          </h2>
        )}

        {/* Info: Displaying Table after state is selected and displayTable state has to be true */}
        {state && displayTable && (
          <Table
            data={cityList}
            columns={visualizationTableColumns}
            editButton={editButton}
          />
        )}

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
