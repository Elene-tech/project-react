//selectors
export const searchString = (state) => state.searchString;

//actions
export const addSearch = (payload) => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

//action creators

const createActionName = (actionName) =>
  `app/searchStringReducer/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};
export default searchStringReducer;
