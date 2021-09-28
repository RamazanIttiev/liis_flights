const getHotels = ({ location, checkIn, checkOut }) => {
  const data = fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`,
    {
      method: 'GET',
    },
  );
  return data;
};

export default getHotels;
