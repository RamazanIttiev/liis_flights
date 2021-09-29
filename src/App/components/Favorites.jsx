import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import HotelInfo from './HotelInfo';

import ArrowUp from '../../assets/arrowUp.svg';
import ArrowDown from '../../assets/arrowDown.svg';

const StyledForm = styled.form`
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

const Favorites = ({ favourites }) => (
  <StyledForm>
    <Title>Избранное</Title>
    <SortWrapper>
      <SortBtn>
        Рейтинг
        <Arrows>
          <img src={ArrowUp} alt="" />
          <img src={ArrowDown} alt="" />
        </Arrows>
      </SortBtn>
      <SortBtn>
        Цена
        <Arrows>
          <img src={ArrowUp} alt="" />
          <img src={ArrowDown} alt="" />
        </Arrows>
      </SortBtn>
    </SortWrapper>
    {/* {favourites.map(hotelId => (
      <HotelInfo
        key={hotelId}
        isFavourite={favourites.length > 0 && favourites.indexOf(hotelId) === -1}
        hotelId={hotelId}
      />
    ))} */}
  </StyledForm>
);

const mapStateToProps = state => ({
  favourites: state.favourites.favourites,
});

export default connect(mapStateToProps, null)(Favorites);
