import { createReducer } from "@reduxjs/toolkit";
import { fetchNews } from "../actions/news";

const initialState = {
  data: [],
  fetching: false,
};

export const newsReducer = createReducer(initialState, {
  [fetchNews.pending]: (state, action) => {
    state.fetching = true;
  },
  [fetchNews.fulfilled]: (state, action) => {
    state.fetching = false;
    state.data = action.payload;
  },
  [fetchNews.rejected]: (state) => {
    state.fethcing = false;
  },
});
