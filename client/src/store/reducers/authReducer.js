const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      localStorage.setItem(
        'userData',
        JSON.stringify({
          userId: action.payload.userId,
          token: action.payload.token,
          name: action.payload.name,
          expDate: action.payload.expDate,
        }),
      );
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
        name: action.payload.name,
        expDate: action.payload.expDate,
      };
    case 'AUTH_LOGOUT':
      localStorage.removeItem('userData');
      return {
        ...state,
        token: null,
        userId: null,
        name: null,
      };
    case 'AUTH_REQUEST':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
