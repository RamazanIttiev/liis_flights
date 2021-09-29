import styled from 'styled-components';
import { connect } from 'react-redux';
import Photos from './Photos';
import HotelInfo from './HotelInfo';
import Arrow from '../../assets/Arrow_small.svg';
import { checkInDate } from '../../utils';

const Base = styled.div`
  order: 2;
  width: 664px;
  background: #fff;
  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
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

const CheckIn = styled.div`
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
  margin-top: 40px;
  max-height: 520px;
  overflow: auto;
  padding-right: 30px;

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

const Hotels = ({ hotels, favourites, filters }) => (
  <Base>
    <SearchInfo>
      <Title>
        Отели <ArrowImg src={Arrow} />
        {filters.location}
      </Title>
      <CheckIn>{checkInDate(filters.checkIn)}</CheckIn>
    </SearchInfo>
    <Photos />
    <>
      <Favourite>
        Добавлено в Избранное: <span>{favourites.length} </span>
        рейсов
      </Favourite>
      <HotelsWrapper>
        {hotels.length > 0 &&
          hotels.map(hotel => (
            <HotelInfo
              key={hotel.hotelId}
              isFavourite={favourites.indexOf(hotel.hotelId) >= 0}
              hotel={hotel}
              checkInDate={checkInDate(filters.checkIn)}
              days={filters.days}
            />
          ))}
      </HotelsWrapper>
    </>
  </Base>
);

const mapStateToProps = state => ({
  hotels: state.hotels,
  favourites: state.favourites,
  filters: state.filters,
});

export default connect(mapStateToProps, null)(Hotels);
