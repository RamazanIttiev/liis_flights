import styled from 'styled-components';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Photos from './Photos';
import HotelInfo from './HotelInfo';
import Arrow from '../../assets/Arrow_small.svg';
import getHotels from '../../services';

const Base = styled.div`
  order: 2;
  width: 664px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px 30px 30px;
  box-sizing: border-box;
`;

const SearchInfo = styled.div`
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

const Date = styled.div`
  display: flex;
  align-items: center;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: ${props => props.theme.palette.main};
`;

const HotelsWrapper = styled.div`
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

// const NoHotels = styled.p`
//   font-style: normal;
//   font-weight: normal;
//   font-size: 17px;
//   color: ${props => props.theme.palette.primary};
// `;

const Hotels = ({ hotels, favourites }) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const allHotels = await getHotels();
      const response = await allHotels.json();

      dispatch({ type: 'SET_HOTELS', payload: response });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Base>
      <SearchInfo>
        <Title>
          Отели <ArrowImg src={Arrow} />
          Москва
        </Title>
        <Date>07 июля 2020</Date>
      </SearchInfo>
      <Photos />
      <>
        <Favourite>
          Добавлено в Избранное: <span>{favourites.length} </span>
          рейсов
        </Favourite>
        <HotelsWrapper>
          {hotels.map(hotel => (
            <HotelInfo
              key={hotel.hotelId}
              isFavourite={hotels.length > 0 && favourites.indexOf(hotel.hotelId) >= 0}
              {...hotel}
            />
          ))}
        </HotelsWrapper>
      </>
    </Base>
  );
};

const mapStateToProps = state => ({
  hotels: state.hotels.hotels,
  favourites: state.favourites.favourites,
});

export default connect(mapStateToProps, null)(Hotels);
