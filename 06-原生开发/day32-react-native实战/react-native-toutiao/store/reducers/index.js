import { combineReducers } from "redux";
import { newsReducer } from "./news";

export const rootReducer = combineReducers({
  news: newsReducer,
});
