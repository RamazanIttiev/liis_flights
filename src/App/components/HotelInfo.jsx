import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Rating } from '@mui/material';
import House from '../../assets/House.svg';
import Heart from '../../assets/Heart.svg';
import Dash from '../../assets/Dash.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
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

const HotelImg = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 24px;
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
  display: flex;
  line-height: 22px;
  font-size: 17px;
  cursor: pointer;

  img {
    margin: 0 12px;
  }

  .css-ryrseu-MuiRating-root {
    color: #cdbc1e;
    margin-top: 5px;

    svg {
      width: 17px;
    }
  }
`;

const DashImg = styled.img``;

const Date = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.grey};
`;

const HotelData = styled.div``;

const HotelName = styled.div`
  width: 90%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  color: ${props => props.theme.palette.primary};
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  height: 100%;
`;

const HeartImg = styled.img`
  position: absolute;
  top: 0;
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
  position: absolute;
  bottom: 0;
  font-size: 11px;
  display: flex;
  align-items: center;

  color: ${props => props.theme.palette.grey};
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    font-weight: 400;
    color: initial;
    margin-left: 8px;
  }
`;

const HotelInfo = ({ isFavourite, hotel, checkInDate, days, imgRemove }) => {
  const { hotelName, priceFrom, hotelId, stars } = hotel;

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isFavourite) {
      dispatch({ type: 'ADD_TO_FAVOURITE', payload: hotelId });
    } else dispatch({ type: 'REMOVE__FROM_FAVOURITE', payload: hotelId });
  };

  return (
    <Wrapper>
      <Info>
        {!imgRemove && (
          <HotelImg>
            <img src={House} alt="" />
          </HotelImg>
        )}
        <HotelData>
          <HotelName>{hotelName}</HotelName>
          <Date>
            {checkInDate}
            <DashImg src={Dash} alt="" />
            {days}
          </Date>
          <Rating name="read-only" value={stars} readOnly />
        </HotelData>
      </Info>
      <PriceWrapper>
        <HeartImg onClick={handleClick} src={Heart} colored={isFavourite} alt="" />
        <Price>
          Price: <span>{priceFrom} ₽</span>
        </Price>
      </PriceWrapper>
    </Wrapper>
  );
};

export default HotelInfo;
