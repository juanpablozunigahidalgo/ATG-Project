import { createSlice } from "@reduxjs/toolkit";
import { Fullproducts } from "../Types/Fullproducts";

const InitialState: Fullproducts = {
  betType: "",
  upcoming: [],
  results: [],
};
export const productsState = createSlice({
  name: "products",
  initialState: InitialState,
  reducers: {
    updateProducts: (state, action) => {
      Object.assign(state, action.payload);
    },
    clearProducts: (state) => {
      Object.assign(state, InitialState);
    },
  },
});

export const { updateProducts, clearProducts } = productsState.actions;
export default productsState.reducer;
