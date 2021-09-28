const initialState = {
  favourites: [],
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter(hotel => hotel !== action.payload),
      };
    default:
      return state;
  }
};

export default favourites;
