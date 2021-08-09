import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

const Slider = ({ slides }) => (
  <Wrapper>
    {slides.map(item => (
      <Slide src={item.img} />
    ))}
  </Wrapper>
);

const mapStateToProps = state => ({
  slides: state.slides.slides,
});

export default connect(mapStateToProps, null)(Slider);
