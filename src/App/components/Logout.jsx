import React from 'react';
import styled from 'styled-components';
import SignOut from '../../assets/LogOut.svg';
import useRouter from '../../hooks/useRouter';

const LogOut = styled.div`
  cursor: pointer;
  position: absolute;
  top: 26px;
  right: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.palette.main};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
`;

const LogOutImg = styled.img`
  margin-left: 20px;
`;

const Logout = () => {
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('auth');
    router.push('/');
  };

  return (
    <LogOut onClick={logOut}>
      Выйти <LogOutImg src={SignOut} />
    </LogOut>
  );
};

export default Logout;
