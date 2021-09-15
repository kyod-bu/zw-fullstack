import { combineReducers } from "redux";
import { reducer as feedReducer } from './feed';

export const rootReducer = combineReducers({
    feed: feedReducer,
});
