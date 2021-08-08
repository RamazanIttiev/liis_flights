import React, { useEffect } from 'react';
import styled from 'styled-components';
import FlightCard from '../components/FlightCard';
import Slider from '../components/Slider';
import Calendar from '../../assets/Calendar.svg';
import Arrow from '../../assets/Arrow_small.svg';

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

const Date = styled.div`
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

const Flights = () => (
  // useEffect(async () => {
  //   try {
  //     const data = await fetch(
  //       'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=USA',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
  //           'X-RapidAPI-Key': '39e1463efbmsh1163ec1c6a2583ap158224jsn76ae20078a09',
  //         },
  //       },
  //     );

  //     console.log(data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

  <Wrapper>
    <Base>
      <Header>
        <Title>
          Вылеты <ArrowImg src={Arrow} />
          SVO - JFK
        </Title>
        <Date>
          07 июля 2020
          <CalendarImg src={Calendar} />
        </Date>
      </Header>
      <Slider />
      <Favourite>
        Добавлено в Избранное: <span>10 </span>
        рейсов
      </Favourite>
      <FlightsWrapper>
        <FlightCard />
      </FlightsWrapper>
    </Base>
  </Wrapper>
);
export default Flights;
