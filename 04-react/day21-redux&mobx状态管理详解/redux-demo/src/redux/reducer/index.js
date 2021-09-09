import { combineReducers } from 'redux';

import { reducer as todoReducer } from './todo';
import { reducer as filterReducer } from './visibilityFilter';

export const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});
