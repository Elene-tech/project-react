//import { createStore } from 'redux';
import initialState from './initialState';
import { legacy_createStore as createStore } from 'redux';
import shortid from 'shortid';

const reducer = (state, action) => {
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      return state;
  }

  // if (action.type === 'ADD_COLUMN')
  //   return {
  //     ...state,
  //     columns: [...state.columns, { ...action.newColumn, id: shortid() }],
  //   };
  // return state;
};
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
