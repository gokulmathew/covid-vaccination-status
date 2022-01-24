import { createSlice } from "@reduxjs/toolkit";

export interface IVisulizationSlice {
  loading: boolean;
  countryList: any;
  stateList: any;
}

const initialState: IVisulizationSlice = {
  loading: false,
  countryList: [],
  stateList: [],
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

    //reducer to update State List
    getStateListRequest: (visulization: any) => {
      visulization.loading = true;
    },

    getStateListSuccess: (visulization: any, action: any) => {
      visulization.loading = false;
      visulization.stateList = action.payload;
    },

    getStateListFail: (visulization: any) => {
      visulization.loading = false;
    },
  },
});

// Actions
export const visulizationActions = slice.actions;

// Reducer
export default slice.reducer;
