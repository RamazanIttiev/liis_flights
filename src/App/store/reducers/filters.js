const initialState = {
  location: 'Moscow',
  checkIn: new Date().toLocaleDateString('fr-CA'),
  checkOut: '2021-10-03',
  days: 1,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return action.payload;
    default:
      return state;
  }
};

export default filters;
