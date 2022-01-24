import axios from "axios";

export default class visualizationService {
  // Service to get country List
  public static getCountryList = () =>
    axios({
      method: "get",
      url: "https://getcountryList",
    });
}
