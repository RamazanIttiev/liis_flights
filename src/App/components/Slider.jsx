import React from 'react';
import styled from 'styled-components';
import City from '../../assets/City.jpg';

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  margin: 24px 0 31px;
`;

const Slide = styled.img`
  width: 164px;
  height: 149px;
  margin-right: 12px;
`;

const Slider = () => (
  <Wrapper>
    <Slide src={City} />
    <Slide src={City} />
    <Slide src={City} />
    <Slide src={City} />
    <Slide src={City} />
  </Wrapper>
);

export default Slider;
