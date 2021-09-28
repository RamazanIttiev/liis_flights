import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import HotelInfo from './HotelInfo';

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
const Favorites = ({ favourites }) => (
  <StyledForm>
    <Title>Избранное</Title>
    {favourites.map(hotel => (
      <HotelInfo
        key={hotel.hotelId}
        isFavourite={favourites.length > 0 && favourites.indexOf(hotel.hotelId) === -1}
        hotel={hotel}
      />
    ))}
  </StyledForm>
);

const mapStateToProps = state => ({
  favourites: state.favourites.favourites,
});

export default connect(mapStateToProps, null)(Favorites);
