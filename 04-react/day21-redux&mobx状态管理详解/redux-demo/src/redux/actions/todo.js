import {
    REMOVE_TODO,
    TOGGLE_TODO,
    ADD_TODO_REQUEST,
    ADD_TODO_FAILURE,
    ADD_TODO_SUCCESS
} from '../constants/todo';

/**
 * Action creator
 */

let id = 1;

// 模拟异步方法
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const addTodo = (text) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO_REQUEST
        });

        delay(1000).then(
            () => {
                dispatch({
                    type: ADD_TODO_SUCCESS,
                    payload: {
                        text,
                        id: id++
                    }
                });
            },

            () => {
                dispatch({
                    type: ADD_TODO_FAILURE,
                });
            }
        );
    };
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: { id }
    };
};

export const toggleTodo = (id, completed) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id,
            completed
        }
    };
};
