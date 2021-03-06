import React from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import Plane from '../../assets/Plane.svg';
import Arrow from '../../assets/Arrow.svg';
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
`;

const Info = styled.div`
  line-height: 22px;
  font-size: 17px;
  cursor: pointer;

  img {
    margin: 0 12px;
  }
`;

const ArrowImg = styled.img``;
const DashImg = styled.img``;

const Date = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.grey};
`;

const Company = styled.div`
  color: ${props => props.theme.palette.grey};
  font-size: 14px;
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
      ? 'brightness(0) saturate(100%) invert(41%) sepia(55%) saturate(4400%) hue-rotate(309deg) brightness(100%) contrast(89%);'
      : 'invert(98%) sepia(2%) saturate(91%) hue-rotate(40deg) brightness(118%) contrast(100%);'} 

  &:hover {
    filter: brightness(0) saturate(100%) invert(41%) sepia(55%) saturate(4400%) hue-rotate(309deg) brightness(100%) contrast(89%);
  }
`;

const Price = styled.div`
  color: ${props => props.theme.palette.grey};
  span {
    font-weight: 400;
    color: initial;
  }
`;

const FlightCard = ({ flight, isFavourite }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isFavourite) {
      dispatch({ type: 'ADD_TO_FAVOURITE', payload: flight.PlaceId });
    } else dispatch({ type: 'REMOVE__FROM_FAVOURITE', payload: flight.PlaceId });
  };

  return (
    <Wrapper>
      <PlaneImg>
        <img src={Plane} alt="" />
      </PlaneImg>
      <Info>
        {flight.Name} ({flight.IataCode})
        <ArrowImg src={Arrow} alt="" />
        {flight.Name} ({flight.IataCode})
        <Date>
          28 June, 2020
          <DashImg src={Dash} alt="" />
          14:50
        </Date>
        <Company>Aeroflot</Company>
      </Info>
      <Box>
        <HeartImg onClick={handleClick} src={Heart} colored={isFavourite} alt="" />
        <Price>
          Price: <span>23 924 ???</span>
        </Price>
      </Box>
    </Wrapper>
  );
};

export default connect(null, null)(FlightCard);
