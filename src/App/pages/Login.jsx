import React from 'react';
import styled from 'styled-components';
import MainBgr from '../../assets/MainBgr.jpg';
import Form from '../components/Form';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${MainBgr}) no-repeat center;
  backdrop-filter: blur(20px);
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 410px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 50px 30px 30px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'Roboto';
  font-style: 'normal';
  font-size: 24;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.palette.primary.main};
`;

const Login = () => (
  <Wrapper>
    <LoginBox>
      <Title>Simple Flight Check</Title>
      <Form />
    </LoginBox>
  </Wrapper>
);

export default Login;
