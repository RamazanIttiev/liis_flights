const getFlights = date => {
  const data = fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/${date}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '39e1463efbmsh1163ec1c6a2583ap158224jsn76ae20078a09',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    },
  );
  return data;
};

export default getFlights;
