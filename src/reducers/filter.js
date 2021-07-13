import { CHANGE_FILTER } from '../actions/types';

const filterReducer = (state = 'All', action) => {
  let newState = state;
  switch (action.type) {
    case CHANGE_FILTER:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default filterReducer;
