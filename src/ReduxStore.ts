import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/fullproductsState";
import gamesReducer from "./reducers/fullgamesState";

const store = configureStore({
  reducer: {
    data: productsReducer,
    datadue: gamesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
