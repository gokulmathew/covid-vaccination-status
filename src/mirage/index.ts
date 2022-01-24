import { createServer } from "miragejs";
import countriesList from "../assets/MockData/countryList";

export default function makeServer() {
  return createServer({
    routes() {
      // CountryListAPI
      this.get("https://getcountryList", () => countriesList);
    },
  });
}
