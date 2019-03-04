import React from 'react';
import styled from 'styled-components';
import colours from '../utils/colours';

const LoadingWrapper = styled.div`
  font: 300 30px/1 Alegreya Sans, monospace;
  height: 100vh;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${colours.themeTwo}55, ${colours.themeOne}55);
  color: whitesmoke;
`;

export default () => <LoadingWrapper>...Loading...</LoadingWrapper>;
