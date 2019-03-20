import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  font: 300 30px/1 Alegreya Sans, monospace;
  color: whitesmoke;
  z-index: 2;
  position: absolute;
  top: 48%;
  left: 46%;
`;

const PlayButton = ({ play }) => <StyledButton onClick={play}>PLAY</StyledButton>;

PlayButton.propTypes = {
  play: PropTypes.func.isRequired,
};

export default PlayButton;
