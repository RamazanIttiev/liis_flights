import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import useRouter from '../../hooks/useRouter';
import Filter from '../components/Filter';
import Hotels from '../components/Hotels';
import Favorites from '../components/Favorites';
import Header from '../components/Header';
import fetchHotels from '../store/services';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 35px;
  background: ${props => props.theme.palette.background};
`;

const Container = styled.div`
  display: flex;
  margin: 32px auto 0;
`;

const Aside = styled.div`
  margin-right: 24px;
`;

const Index = ({ filters }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHotels(dispatch, filters);
  }, []);

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
        <Hotels />
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps, null)(Index);
