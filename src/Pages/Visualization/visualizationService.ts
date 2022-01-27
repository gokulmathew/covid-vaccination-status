import axios from "axios";

export default class visualizationService {
  // Service to get country Vaccination Status List
  public static getCountryiesVaccinationStatusList = () =>
    axios({
      method: "get",
      url: "https://getCountryVaccinationStatusList",
    });
}
