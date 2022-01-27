import { createServer } from "miragejs";
// Mock Data imports
import countriesVaccinationStatus from "../assets/MockData/CountriesVaccinationStatus";

export default function makeServer() {
  return createServer({
    routes() {
      // CountryVaccinationStatusList API
      this.get(
        "https://getCountryVaccinationStatusList",
        () => countriesVaccinationStatus
      );
    },
  });
}
