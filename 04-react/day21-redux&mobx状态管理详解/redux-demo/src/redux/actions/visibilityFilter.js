import { SET_FILTER } from '../constants/visibilityFilter';

export const setFilterText = (filterText) => {
    return {
        type: SET_FILTER,
        payload: filterText
    };
}
