import React from 'react';
import { connect, useDispatch } from 'react-redux';

import styled from 'styled-components';
import HotelInfo from './HotelInfo';

import ArrowUp from '../../assets/arrowUp.svg';
import ArrowDown from '../../assets/arrowDown.svg';

import { checkInDate, SORT_RATING, SORT_PRICE } from '../../utils';

const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 472px;
  background: #ffffff;
  box-shadow: 0px 4px 33px rgb(0 0 0 / 4%);
  border-radius: 16px;
  padding: 32px;
`;

const Title = styled.div``;

const SortWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const SortBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  background: #ffffff;
  border: 1px solid #41522e;
  box-sizing: border-box;
  border-radius: 4px;

  &:first-child {
    margin-right: 8px;
  }
`;

const Arrows = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
`;

const FavouritesWrapper = styled.div`
  min-height: 289px;
  margin-top: 40px;
  max-height: 520px;
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

const Favorites = ({ hotels, filters, favourites }) => {
  const dispatch = useDispatch();

  const handleSort = sortName => () => {
    dispatch({ type: 'SORT', payload: sortName });
  };

  const favouriteHotels = hotels
    .slice()
    .sort((a, b) =>
      favourites.sortOrder
        ? a[favourites.sort] - b[favourites.sort]
        : b[favourites.sort] - a[favourites.sort],
    )
    .filter(hotel => favourites.data.indexOf(hotel.hotelId) >= 0);

  return (
    <Base>
      <Title>Избранное</Title>
      <SortWrapper>
        <SortBtn onClick={handleSort(SORT_RATING)}>
          Рейтинг
          <Arrows>
            <img src={ArrowUp} alt="" />
            <img src={ArrowDown} alt="" />
          </Arrows>
        </SortBtn>
        <SortBtn onClick={handleSort(SORT_PRICE)}>
          Цена
          <Arrows>
            <img src={ArrowUp} alt="" />
            <img src={ArrowDown} alt="" />
          </Arrows>
        </SortBtn>
      </SortWrapper>
      <FavouritesWrapper>
        {favouriteHotels.map(hotel => (
          <HotelInfo
            imgRemove
            key={hotel.hotelId}
            isFavourite
            hotel={hotel}
            checkInDate={checkInDate(filters.checkIn)}
            days={filters.days}
          />
        ))}
      </FavouritesWrapper>
    </Base>
  );
};

const mapStateToProps = state => ({
  hotels: state.hotels,
  filters: state.filters,
  favourites: state.favourites,
});

export default connect(mapStateToProps, null)(Favorites);
