import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export interface AppState {
  startUnixTime: number;
  hitCountPing: number;
}

const initialState: AppState = {
  startUnixTime: moment().valueOf(), // this value gets inited once and does not change
  hitCountPing: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    incrementHitCountPing: (state) => {
      state.hitCountPing += 1;
    },
  },
});

export const {
  incrementHitCountPing,
} = appSlice.actions;

export default appSlice.reducer;
