import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsByChannel } from "../../api/news";

export const fetchNews = createAsyncThunk(
  "fetch_news",
  async (channel, start, end) => {
    return await getNewsByChannel(channel, start, end);
  }
);
