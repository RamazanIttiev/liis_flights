const initialState = {
  flights: [],
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHTS':
      if (action.payload.length) {
        return {
          ...state,
          flights: [
            ...state.flights,
            ...action.payload.filter(i => !state.flights.map(j => j.PlaceId).includes(i.PlaceId)),
          ],
        };
      }
      return {
        ...state,
        flights: [],
      };
    default:
      return state;
  }
};

export default flights;
