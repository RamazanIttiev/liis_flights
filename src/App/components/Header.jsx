import styled from 'styled-components';
import SignOut from '../../assets/LogOut.svg';
import useRouter from '../../hooks/useRouter';

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

const LogOut = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.palette.main};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
`;

const LogOutImg = styled.img`
  margin-left: 20px;
`;

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('auth');
    router.push('/');
  };

  return (
    <Base>
      <Title>Simple Hotel Check</Title>
      <LogOut onClick={handleClick}>
        Выйти <LogOutImg src={SignOut} />
      </LogOut>
    </Base>
  );
};

export default Header;
