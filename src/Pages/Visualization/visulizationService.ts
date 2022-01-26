import axios from "axios";

export default class visualizationService {
  // Service to get country List
  public static getCountryList = () =>
    axios({
      method: "get",
      url: "https://getcountryList",
    });

  // Service to get State List
  public static getStateList = (countryName: string) =>
    axios({
      method: "get",
      url: `https://getstateList/${countryName}`,
    });

  // Service to get City List
  public static getCityList = (countryName: string) =>
    axios({
      method: "get",
      url: `https://getCityList/${countryName}`,
    });
}
