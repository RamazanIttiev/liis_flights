const addToFavourites = id => dispatch => {
  dispatch({ type: 'IS_FAVOURITE', payload: id });
};

export default addToFavourites;
