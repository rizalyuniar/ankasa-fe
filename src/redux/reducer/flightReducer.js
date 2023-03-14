const initialState = {
  flight: [],
  flightDetail: [],
  isLoading: false,
};

export const flightReducer = (state = initialState, action) => {
  if (action.type === 'GET_ALL_FLIGHT') {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === 'CREATE_FLIGHT_BOOKING') {
    return state;
  } else if (action.type === 'DELETE_FLIGHT') {
    return state;
  } else if (action.type === 'UPDATE_FLIGHT') {
    return state;
  } else if (action.type === 'GET_DETAIL_FLIGHT') {
    return {
      ...state,
      productDetail: action.payload,
    };
  } else {
    return state;
  }
}