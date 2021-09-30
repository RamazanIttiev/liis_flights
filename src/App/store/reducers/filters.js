const myDate = new Date(new Date().toLocaleDateString('fr-CA'));
myDate.setDate(myDate.getDate() + 1);

const initialState = {
  location: 'Moscow',
  checkIn: new Date().toLocaleDateString('fr-CA'),
  checkOut: myDate.toLocaleDateString('fr-CA'),
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
