import { createSlice } from "@reduxjs/toolkit";

export interface IVisulizationSlice {
  loading: boolean;
  countriesVaccinationStatus: any;
}

const initialState: IVisulizationSlice = {
  loading: false,
  countriesVaccinationStatus: {},
};

const slice = createSlice({
  name: "visulization",
  initialState,

  reducers: {
    //reducer to update Country Vaccination status
    getCountriesVaccinationStatusRequest: (visulization: any) => {
      visulization.loading = true;
    },

    getCountriesVaccinationStatusSuccess: (visulization: any, action: any) => {
      visulization.loading = false;
      visulization.countriesVaccinationStatus = action.payload;
    },

    getCountriesVaccinationStatusFail: (visulization: any) => {
      visulization.loading = false;
    },
  },
});

// Actions
export const visulizationActions = slice.actions;

// Reducer
export default slice.reducer;
