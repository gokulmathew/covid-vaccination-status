import axios from "axios";

export default class visualizationService {
  // Service to get country List
  public static getCountryList = () =>
    axios({
      method: "get",
      url: "https://getcountryList",
    });

  // Service to get State List
  public static getStateList = () =>
    axios({
      method: "get",
      url: "https://getstateList",
    });
}
