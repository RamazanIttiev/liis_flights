const fetchHotels = async (dispatch, { location, checkIn, checkOut }) => {
  fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`,
    {
      method: 'GET',
    },
  )
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'SET_HOTELS', payload: data });
    })
    .catch(error => {
      console.log(error);
    });
};

export default fetchHotels;
