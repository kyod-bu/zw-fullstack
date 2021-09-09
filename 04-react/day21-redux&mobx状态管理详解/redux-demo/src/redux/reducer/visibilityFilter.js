import { SET_FILTER } from  '../constants/visibilityFilter';

/**
 * '' -> all todos
 * 'completed' -> completed todos
 */
const initialState = '';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload;
        }
        default:
            return state;
    }
};
