import React from 'react';
import styled from 'styled-components';
import MainBgr from '../../assets/MainBgr.jpg';
import LoginForm from '../components/LoginForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(10px);
`;

const LoginBox = styled.div`
  width: 410px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px 30px 30px;
  box-sizing: border-box;
  z-index: 1;
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-style: 'normal';
  font-size: 24;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.palette.primary};
`;

const Login = () => (
  <Wrapper>
    <Background src={MainBgr} alt="" />
    <LoginBox>
      <Title>Simple Hotel Check</Title>
      <LoginForm />
    </LoginBox>
  </Wrapper>
);

export default Login;
