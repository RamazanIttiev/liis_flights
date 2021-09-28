const initialState = {
  hotels: [],
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case 'HOTELS':
      return {
        ...state,
        hotels: action.payload,
      };
    default:
      return state;
  }
};

export default hotels;
