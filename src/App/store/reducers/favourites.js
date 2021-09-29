const initialState = [];

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [...state, action.payload];
    case 'REMOVE_FAVOURITE':
      return state.filter(hotelId => hotelId !== action.payload);
    default:
      return state;
  }
};

export default favourites;
