const initialState = {
  hotels: [],
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case 'HOTELS':
      if (action.payload.length) {
        return {
          ...state,
          hotels: [
            ...state.hotels,
            ...action.payload.filter(i => !state.hotels.map(j => j.PlaceId).includes(i.PlaceId)),
          ],
        };
      }
      return {
        ...state,
        hotels: [],
      };
    default:
      return state;
  }
};

export default hotels;
