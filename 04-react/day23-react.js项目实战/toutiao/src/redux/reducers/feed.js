import { createReducer } from "@reduxjs/toolkit";
import { fetchFeed } from "../actions/feed";

const initialState = {
    fetching: false,
    data: [],
};

export const reducer = createReducer(initialState, {
    [fetchFeed.pending]: (state, action) => {
        state.fetching = true;
    },
    [fetchFeed.fulfilled]: (state, action) => {
        state.fetching = false;
        state.data = [...state.data, ...action.payload];
        // state.data = action.payload;
    },
    [fetchFeed.rejected]: (state, action) => {
        state.fetching = false;
    },
});
