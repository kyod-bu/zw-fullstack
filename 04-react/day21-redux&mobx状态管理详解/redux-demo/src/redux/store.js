import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';
import ReduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...[ReduxThunk]))
);

// const addAction = {
//   type: 'increment',
// }

// let state = {
//   count: 0,
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     }
//     default:
//       return state;
//   }
// }

// const dispatch = (action) => {
//   state = reducer(state, action);
// }

// console.log(state.count); // 0

// dispatch(addAction);

// console.log(state.count); // 1
