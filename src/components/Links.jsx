import React, { Fragment } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colours from '../utils/colours';

const StyledLinks = styled.div`
  font: 14px Alegreya Sans, monospace;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: space-between;
  & > a {
    padding: 5px 10px 5px 10px;
    color: ${colours.textColour}99;
    text-decoration: none;
    &:hover {
      color: ${colours.textColour}BB;
    }
  }
`;

const Links = () => (
  <Fragment>
    <StyledLinks>
      <a href="https://shockofdaylight.bandcamp.com/" target="blank">
        <FontAwesomeIcon icon="music" />
      </a>
      <a href="http://shockofdaylight.com/" target="blank">
        <FontAwesomeIcon icon="home" />
      </a>
    </StyledLinks>
    <StyledLinks>
      <a href="http://shockofdaylight.com/post/183648535965/s-e-a" target="blank">
        About
      </a>
    </StyledLinks>
  </Fragment>
);
export default Links;
