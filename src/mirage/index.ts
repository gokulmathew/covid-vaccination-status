import { createServer } from "miragejs";
// Mock Data imports
import countriesList from "../assets/MockData/countryList";
import { inidiaStatesList } from "../assets/MockData/stateList";
import {
  cityListInTamilNadu,
  cityListInKerala,
  cityListInKarnataka,
} from "../assets/MockData/cityList";
// Constant Imports
import appConstants from "../constants/appConstants";

export default function makeServer() {
  return createServer({
    routes() {
      // CountryListAPI
      this.get("https://getcountryList", () => countriesList);

      // State ListAPI
      this.get(
        "https://getstateList/:countryName",
        (_schema, request: any): any => {
          if (
            request &&
            request.params &&
            request.params.countryName == appConstants.INDIA
          )
            return inidiaStatesList;
          else return [];
        }
      );

      // CityListAPI
      this.get(
        "https://getCityList/:stateName",
        (_schema, request: any): any => {
          if (
            request &&
            request.params &&
            request.params.stateName == "Tamil Nadu"
          )
            return cityListInTamilNadu;
          else if (
            request &&
            request.params &&
            request.params.stateName == "Kerala"
          )
            return cityListInKerala;
          else if (
            request &&
            request.params &&
            request.params.stateName == "Karnataka"
          )
            return cityListInKarnataka;
          else return [];
        }
      );
    },
  });
}
