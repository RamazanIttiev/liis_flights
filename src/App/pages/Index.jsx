import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import useRouter from '../../hooks/useRouter';
// import getHotels from '../../services';
import Filter from '../components/Filter';
import Hotels from '../components/Hotels';
import Favorites from '../components/Favorites';
import Header from '../components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 35px;
  background: ${props => props.theme.palette.secondary};
`;

const Container = styled.div`
  display: flex;
  margin: 32px auto 0;
`;

const Aside = styled.div`
  margin-right: 24px;
`;

const Index = ({ hotels, favourites }) => {
  const router = useRouter();
  // const dispatch = useDispatch();

  // useEffect(async () => {
  //   try {
  //     const allHotels = await getHotels(date);
  //     const response = await allHotels.json();

  //     dispatch({ type: 'SET_HOTELS', payload: !response.errors ? response.Places : [] });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [date]);

  if (!localStorage.getItem('auth')) {
    router.push('/');
  }
  return (
    <Wrapper>
      <Header />
      <Container>
        <Aside>
          <Filter />
          <Favorites />
        </Aside>
        <Hotels hotels={hotels} favourites={favourites} />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  hotels: state.hotels.hotels,
  favourites: state.favourites.favourites,
});

export default connect(mapStateToProps, null)(Index);
