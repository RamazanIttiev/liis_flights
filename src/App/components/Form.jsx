import React from 'react';

import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useRouter from '../../hooks/useRouter';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 7px;
  position: relative;
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  color: ${props => props.error && '#EB1717'};
`;

const Input = styled.input`
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  height: 34px;
  border: ${props => props.error && '1px solid #EB1717'};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(235, 23, 23, 0.2);
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #eb1717;
  position: absolute;
  bottom: -60px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 116px;
  height: 34px;
  border: none;
  margin-left: auto;
  margin-top: 25px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(104.34deg, #3c4cad -15.34%, #00c3ff 145.95%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 0px 4px #99a0a3;
  }

  &:active {
    border: 1.5px solid rgba(29, 138, 216, 0.3);
  }
`;

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const formSubmit = data => {
    localStorage.setItem('userData', JSON.stringify(data));
    localStorage.setItem('auth', true);
    router.push('/flights');
  };

  return (
    <StyledForm onSubmit={handleSubmit(formSubmit)}>
      <LabelWrapper>
        <Label error={errors.email}>Логин:</Label>
        {errors.email && <ErrorMessage>Invalid email address</ErrorMessage>}
      </LabelWrapper>
      <Input
        type="text"
        error={errors.email}
        {...register('email', {
          required: true,
          pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      <LabelWrapper>
        <Label error={errors.password}>Пароль:</Label>
        {errors.password && <ErrorMessage>Invalid password</ErrorMessage>}
      </LabelWrapper>
      <Input
        type="password"
        error={errors.password}
        {...register('password', { required: true, minLength: 8, pattern: /^[A-Za-z0-9_]+$/gm })}
      />
      <StyledButton type="submit">Войти</StyledButton>
    </StyledForm>
  );
};

export default Form;
