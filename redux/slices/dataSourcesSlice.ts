import { createSelector, createSlice } from "@reduxjs/toolkit";
import dataSourcesMock, { DataSource } from "./dataSourcesMock";

// Import the mock data, this would probably be retrieved by the API in a real implementation
// (could use redux thunk or react query)
const initialState = {
  items: dataSourcesMock,
};

const dataSourcesSlice = createSlice({
  name: "dataSources",
  initialState,
  reducers: {
    addDataSource: (state, newSource) => {
      state.items.push(newSource.payload);
    },
  },
});

export const selectItemsByQueryAndFilter = createSelector(
  (state) => state.dataSources.items, // Give all items to the selector
  (_, query: string, filter) => ({ query, filter }), // Grab the query text and filter
  (items: Array<DataSource>, queryFilter) => {
    // Return filtered items
    const { query, filter } = queryFilter as any;

    // Always filter by query, but also throw in the "haveHeardOf" filter if it is present
    switch (filter) {
      case "haveHeardOf":
        return items.filter(
          (item) =>
            item.tags.haveHeardOf &&
            item.label.toLowerCase().includes(query.toLowerCase())
        );
      case "haveNotHeardOf":
        return items.filter(
          (item) =>
            !item.tags.haveHeardOf &&
            item.label.toLowerCase().includes(query.toLowerCase())
        );
      default:
        return items.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase())
        );
    }
  }
);

export const { addDataSource } = dataSourcesSlice.actions;
export default dataSourcesSlice.reducer;
