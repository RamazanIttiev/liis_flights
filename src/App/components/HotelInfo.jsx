import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import House from '../../assets/House.svg';
import Heart from '../../assets/Heart.svg';
import Dash from '../../assets/Dash.svg';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 13% 70% 17%;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: normal;
  margin-top: 42px;

  &:first-child {
    margin-top: 0;
  }

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -23px;
    background: rgba(135, 135, 135, 0.2);
    border-radius: 8px;
  }
`;

const PlaneImg = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(0, 119, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    height: 35px;
  }
`;

const Info = styled.div`
  line-height: 22px;
  font-size: 17px;
  cursor: pointer;

  img {
    margin: 0 12px;
  }
`;

const DashImg = styled.img``;

const Date = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.grey};
`;

const HotelName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  color: ${props => props.theme.palette.primary};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeartImg = styled.img`
  cursor: pointer;
  width: 21px;
  height: 18px;
  filter: ${props =>
    props.colored
      ? 'invert(48%) sepia(23%) saturate(1566%) hue-rotate(313deg) brightness(94%) contrast(90%);'
      : 'invert(100%) sepia(0%) saturate(0%) hue-rotate(67deg) brightness(113%) contrast(101%);'}

  &:hover {
    filter: invert(48%) sepia(23%) saturate(1566%) hue-rotate(313deg) brightness(94%) contrast(90%);
  }
`;

const Price = styled.div`
  color: ${props => props.theme.palette.grey};
  span {
    font-weight: 400;
    color: initial;
  }
`;

const HotelInfo = ({ isFavourite, hotel }) => {
  const { hotelName } = hotel;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isFavourite) {
      dispatch({ type: 'ADD_TO_FAVOURITE', payload: hotel.hotelId });
    } else dispatch({ type: 'REMOVE__FROM_FAVOURITE', payload: hotel.hotelId });
  };

  return (
    <Wrapper>
      <PlaneImg>
        <img src={House} alt="" />
      </PlaneImg>
      <Info>
        <HotelName>{hotelName}</HotelName>
        <Date>
          28 June, 2020
          <DashImg src={Dash} alt="" />1 день
        </Date>
      </Info>
      <Box>
        <HeartImg onClick={handleClick} src={Heart} colored={isFavourite} alt="" />
        <Price>
          Price: <span>23 924 ₽</span>
        </Price>
      </Box>
    </Wrapper>
  );
};

export default HotelInfo;
