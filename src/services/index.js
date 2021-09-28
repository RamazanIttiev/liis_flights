const getHotels = () => {
  const data = fetch(
    `http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2021-09-29&checkOut=2021-10-03&limit=10`,
    {
      method: 'GET',
    },
  );
  return data;
};

export default getHotels;
