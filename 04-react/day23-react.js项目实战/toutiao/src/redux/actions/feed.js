import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchFeed as fetchFeedAPI } from "../../api/feed";
import { FETCH_FEED } from "../constants/feed";

export const fetchFeed = createAsyncThunk(FETCH_FEED, async () => {
  const response = await fetchFeedAPI();
  console.log("res", response);
  return response.data;
});
