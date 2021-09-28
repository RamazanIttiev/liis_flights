import styled from 'styled-components';
import Logout from './Logout';

const Base = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
`;

const Header = () => (
  <Base>
    <Title>Simple Hotel Check</Title>
    <Logout />
  </Base>
);

export default Header;
