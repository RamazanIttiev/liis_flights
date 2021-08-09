import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import FlightCard from '../components/FlightCard';
import Slider from '../components/Slider';
import Calendar from '../../assets/Calendar.svg';
import Arrow from '../../assets/Arrow_small.svg';
import useRouter from '../../hooks/useRouter';
import Logout from '../components/Logout';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-sizing: border-box;
  height: 100vh;
  background: ${props => props.theme.palette.secondary};
`;

const Base = styled.div`
  width: 810px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px 30px 30px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
`;

const ArrowImg = styled.img`
  margin: 0 20px;
`;
const CalendarImg = styled.img`
  margin-left: 15px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: ${props => props.theme.palette.main};
`;

const FlightsWrapper = styled.div`
  min-height: 100px;
  margin-top: 22px;
  max-height: 450px;
  overflow: auto;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.palette.main};
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e7e7e7;
  }
`;

const Favourite = styled.div`
  font-size: 17px;
  font-weight: 300;

  span {
    font-weight: 500;
    color: ${props => props.theme.palette.main};
  }
`;

const Flights = ({ flights, favourites }) => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const allFlights = await fetch(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/${date}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '39e1463efbmsh1163ec1c6a2583ap158224jsn76ae20078a09',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          },
        },
      );
      const response = await allFlights.json();
      dispatch({ type: 'SET_FLIGHTS', payload: response.Places });
    } catch (e) {
      console.error(e);
    }
  }, [date]);

  const handleChange = event => {
    setDate(event.target.value);
  };

  if (!localStorage.getItem('auth')) {
    router.push('/');
  }
  return (
    <Wrapper>
      <Base>
        <Header>
          <Title>
            Вылеты <ArrowImg src={Arrow} />
            SVO - JFK
          </Title>
          <DateWrapper>
            <input type="date" value={date} onChange={e => handleChange(e)} />
            <CalendarImg src={Calendar} />
          </DateWrapper>
        </Header>
        <Slider />
        {flights.code !== 404 && (
          <>
            <Favourite>
              Добавлено в Избранное: <span>{favourites.length} </span>
              рейсов
            </Favourite>
            <FlightsWrapper>
              {flights &&
                flights.map(flight => (
                  <FlightCard
                    key={flight.Name}
                    isFavourite={favourites.indexOf(flight.PlaceId) >= 0}
                    flight={flight}
                  />
                ))}
            </FlightsWrapper>
          </>
        )}
      </Base>
      <Logout />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  flights: state.flights.flights,
  favourites: state.favourites.favourites,
});

export default connect(mapStateToProps, null)(Flights);
