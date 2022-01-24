import { createSlice } from "@reduxjs/toolkit";

export interface IVisulizationSlice {
  loading: boolean;
  countryList: any;
}

const initialState: IVisulizationSlice = {
  loading: false,
  countryList: [],
};

const slice = createSlice({
  name: "visulization",
  initialState,

  reducers: {
    //reducer to update Country List
    getCountryListRequest: (visulization: any) => {
      visulization.loading = true;
    },

    getCountryListSuccess: (visulization: any, action: any) => {
      visulization.loading = false;
      visulization.countryList = action.payload;
    },

    getCountryListFail: (visulization: any) => {
      visulization.loading = false;
    },
  },
});

// Actions
export const {
  getCountryListRequest,
  getCountryListSuccess,
  getCountryListFail,
} = slice.actions;

// Reducer
export default slice.reducer;
