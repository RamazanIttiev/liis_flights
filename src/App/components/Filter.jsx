import React from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 410px;
  background: #ffffff;
  box-shadow: 0px 4px 33px rgb(0 0 0 / 4%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  margin-top: 25px;
  margin-bottom: 7px;
  position: relative;
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
  background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  &:hover {
    box-shadow: 0px 0px 4px #99a0a3;
  }

  &:active {
    border: 1.5px solid rgba(29, 138, 216, 0.3);
  }
`;

const Filter = () => {
  const { handleSubmit, register } = useForm();

  const formSubmit = data => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(formSubmit)}>
      <Label>Локация</Label>
      <Input {...register('location')} defaultValue="Moscow" type="text" />
      <Label>Дата заселения</Label>
      <Input
        {...register('chechIn')}
        defaultValue={new Date().toLocaleDateString('fr-CA')}
        type="date"
      />
      <Label>Количество дней</Label>
      <Input {...register('checkout')} defaultValue="1" type="number" />
      <StyledButton type="submit">Найти</StyledButton>
    </StyledForm>
  );
};

export default Filter;
