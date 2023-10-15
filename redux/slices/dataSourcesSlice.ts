import { createSelector, createSlice } from "@reduxjs/toolkit";
import dataSourcesMock, { DataSource } from "./dataSourcesMock";

// Import the mock data, this would probably be retrieved by the API in a real implementation
// (could use redux thunk or react query)
const initialState = {
  items: dataSourcesMock,
  selectedSource: 0,
};

const dataSourcesSlice = createSlice({
  name: "dataSources",
  initialState,
  reducers: {
    selectDataSource: (state, newSource) => {
      state.selectedSource = newSource.payload;
    },
    unselectDataSource: (state) => {
      state.selectedSource = 0;
    },
  },
});

export const getSelectedSource = createSelector(
  (state) => ({
    items: state.dataSources.items,
    selectedId: state.dataSources.selectedSource,
  }),
  (data) => {
    const { items, selectedId } = data as any;
    if (selectedId === 0) return null;
    return items.find((item: DataSource) => item.id === selectedId);
  }
);

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

export const { selectDataSource, unselectDataSource } =
  dataSourcesSlice.actions;
export default dataSourcesSlice.reducer;
