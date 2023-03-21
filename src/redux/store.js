//import { createStore } from 'redux';
import initialState from './initialState';
import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';
//selectors

// action creators

export const addSearch = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
