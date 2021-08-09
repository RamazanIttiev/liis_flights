const initialState = {
  flights: [],
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHTS':
      return {
        ...state,
        flights: [
          ...state.flights,
          ...action.payload.filter(i => !state.flights.map(j => j.PlaceId).includes(i.PlaceId)),
        ],
      };
    default:
      return state;
  }
};

export default flights;
