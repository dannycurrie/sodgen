import React from 'react';
import styled from 'styled-components';

const BackgroundImg = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: ${props => `url(${props.url})`};
  background-size: 200% 200%;
  background-repeat: repeat

  animation: image2 ${props => props.duration} ease infinite;

  @keyframes image2 {
    0% {
      background-position: ${props => props.startX} ${props => props.startY};      
      opacity: ${props => props.baseOpactiy.toString()};
      background-size: 250% 250%;
    }
    50% {
      background-position: ${props => props.endX} ${props => props.endY};
      opacity: ${props => (props.baseOpactiy - 0.2).toString()};      
      background-size: 275% 275%;
    }
    100% {
      background-position: ${props => props.startX} ${props => props.startY};      
      opacity: ${props => props.baseOpactiy.toString()};      
      background-size: 245% 245%;
    }
  }
`;

export default props => <BackgroundImg {...props} />;
