import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    ADD_TODO_REQUEST,
    ADD_TODO_FAILURE,
    ADD_TODO_SUCCESS
} from '../constants/todo';

const initialState = [];

/**
 * immutable 不可变类型
 */
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false,
                },
                ...state,
            ];
        }
        case ADD_TODO_REQUEST: {
            console.log('loading ...');
            return state;
        }
        case ADD_TODO_SUCCESS: {
            return [
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false,
                },
                ...state,
            ];
        }
        case ADD_TODO_FAILURE: {
            console.log('something went wrong ...');
            return state;
        }
        case REMOVE_TODO: {
            const id = action.payload.id;
            return state.filter((todo) => todo.id !== id);
        }
        case TOGGLE_TODO: {
            const id = action.payload.id;
            const nextCompleted = action.payload.completed;
            const idx = state.findIndex((todo) => todo.id === id);

            // [1, 2, 3]
            // slice(0, 1) -> [1]
            // slice(0 + 1) -> [3]
            return [
                ...state.slice(0, idx),
                {
                    ...state[idx],
                    completed: nextCompleted
                },
                ...state.slice(idx + 1)
            ];
        }
        default:
            return state;
    }
};
