import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colours from '../utils/colours';

const StyledButton = styled.button`
  color: ${colours.themeOne}88;
  z-index: 2;
  position: absolute;
  top: 48%;
  left: 46%;
  box-sizing: border-box;
  display: block;
  width: 80px;
  height: 80px;
  padding-top: 3px;
  padding-left: 10px;
  line-height: 20px;
  border: 6px solid ${colours.themeOne}88;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  background-color: ${colours.themeTwo}33;
  font-size: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${colours.themeTwo}99;
    box-shadow: 0px 0px 10px rgba(255, 255, 100, 1);
    text-shadow: 0px 0px 10px rgba(255, 255, 100, 1);
  }
`;

const PlayButton = ({ play }) => (
  <StyledButton onClick={play}>
    <FontAwesomeIcon icon="play" />
  </StyledButton>
);

PlayButton.propTypes = {
  play: PropTypes.func.isRequired,
};

export default PlayButton;
