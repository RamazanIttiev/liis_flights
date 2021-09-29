const initialState = [];

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case 'HOTELS':
      return action.payload;
    default:
      return state;
  }
};

export default hotels;
