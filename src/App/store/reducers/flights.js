const initialState = {
  flights: [],
};

const flights = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIGHTS':
      return {
        ...state,
        flights: [...state.flights, ...action.payload],
      };
    default:
      return state;
  }
};

export default flights;
