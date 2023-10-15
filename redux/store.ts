import { configureStore } from "@reduxjs/toolkit";
import dataSourcesReducer from "./slices/dataSourcesSlice";

const store = configureStore({
  reducer: {
    dataSources: dataSourcesReducer,
  },
});

export default store;
