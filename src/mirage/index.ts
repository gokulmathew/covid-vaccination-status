import { createServer } from "miragejs";
import countriesList from "../assets/MockData/countryList";
import statesList from "../assets/MockData/stateList";

export default function makeServer() {
  return createServer({
    routes() {
      // CountryListAPI
      this.get("https://getcountryList", () => countriesList);

      // State ListAPI
      this.get("https://getstateList", () => statesList);
    },
  });
}
