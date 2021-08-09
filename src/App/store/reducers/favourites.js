const initialState = {
  favourites: [],
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FAVOURITE':
      return {
        ...state,
        favourites: [
          ...state.favourites,
          state.favourites.filter(item => item.payload !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default favourites;
