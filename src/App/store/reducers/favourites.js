const initialState = {
  data: [],
  sortOrder: false,
  sortName: null,
};

const favourites = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        data: state.data.filter(hotelId => hotelId !== action.payload),
      };
    case 'SORT':
      return {
        ...state,
        sortOrder: !state.sortOrder,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default favourites;
