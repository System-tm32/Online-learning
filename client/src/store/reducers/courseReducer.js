const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COURSES':
      return [...action.payload];
    default:
      return state;
  }
};

export default courseReducer;
