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
`;

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;

const Input = styled.input`
  border: 1px solid #c9cacc;
  box-sizing: border-box;
  border-radius: 4px;
  height: 34px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-family: Roboto;
  font-weight: 400;
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
    router.push('/flights');
  };

  return (
    <StyledForm onSubmit={handleSubmit(formSubmit)}>
      <LabelWrapper>
        <Label>Логин:</Label>
        {errors.email && <ErrorMessage>Invalid email address</ErrorMessage>}
      </LabelWrapper>
      <Input
        type="text"
        {...register('email', {
          required: true,
          pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      <LabelWrapper>
        <Label>Пароль:</Label>
        {errors.password && <ErrorMessage>Invalid password</ErrorMessage>}
      </LabelWrapper>
      <Input
        type="password"
        {...register('password', { required: true, minLength: 8, pattern: /^[A-Za-z0-9_]+$/gm })}
      />
      <StyledButton type="submit">Войти</StyledButton>
    </StyledForm>
  );
};

export default Form;
