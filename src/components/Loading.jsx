import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import colours from '../utils/colours';

const LoadingWrapper = styled.div`
  font: 300 30px/1 Alegreya Sans, monospace;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${colours.themeTwo}33, ${colours.themeOne}33);
  color: ${colours.textColour}88;
`;

export default () => (
  <LoadingWrapper>
    <Loader type="Bars" color="whitesmoke" height="100" width="100" />
  </LoadingWrapper>
);
