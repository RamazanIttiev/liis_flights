const initialState = {
  flights: [],
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHTS':
      return {
        ...state,
        flights: [...state.flights, ...action.payload],
        // flights: state.flights.map(item =>
        //   // state.flights.includes(item) ? null : state.flights.push(item),
        //   action.payload.filter(flight => flight.PlaceId === item.PlaceId),
        // ),
      };
    default:
      return state;
  }
};

export default flights;
