import styled from 'styled-components';
import Arrow from '../../assets/Arrow_small.svg';

const Base = styled.div`
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

const Header = () => (
  <Base>
    <Title>
      Отели <ArrowImg src={Arrow} />
      Москва
    </Title>
    <Date>07 июля 2020</Date>
  </Base>
);

export default Header;
