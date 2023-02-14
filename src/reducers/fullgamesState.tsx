import { createSlice } from "@reduxjs/toolkit";
import { Fullgames } from "../Types/Fullgames";

const InitialState: Fullgames = {
  "@type": "",
  id: "",
  status: "",
  pools: [],
  races: [],
  currentVersion: 0,
};
export const gamesState = createSlice({
  name: "games",
  initialState: InitialState,
  reducers: {
    updateGames: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearGames: (state) => {
      Object.assign(state, InitialState);
    },
  },
});

export const { updateGames, clearGames } = gamesState.actions;
export default gamesState.reducer;
