import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  margin: 24px 0 31px;
`;

const Photo = styled.img`
  width: 164px;
  height: 149px;
  margin-right: 12px;
`;

const Photos = ({ photos }) => (
  <Wrapper>
    {photos.map(item => (
      <Photo key={item.id} src={item.img} />
    ))}
  </Wrapper>
);

const mapStateToProps = state => ({
  photos: state.photos.photos,
});

export default connect(mapStateToProps, null)(Photos);
