const initialState = {
  favourites: [],
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FAVOURITE':
      return {
        ...state,
        isFavourite: [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};

export default favourites;
