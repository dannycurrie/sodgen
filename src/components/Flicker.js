import React from 'react';
import styled from 'styled-components';

const getAnimations = () => {
  let result = '';
  for (let i = 0; i < 6; i += 1) {
    const r = Math.floor(Math.random() * 6);
    result += `&:nth-of-type(${r}) {animation-delay: ${r * 0.25}s }`;
  }
  return result;
};

const FlickerWrapper = styled.div`
  font: 300 50px/1 Alegreya Sans, monospace;
  height: 100%;
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#1a1a1a, #000);

  @keyframes stretch {
    5% {
      transform: scaleX(5000);
      opacity: 0.1;
    }
    15% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;

const FlickerH1 = styled.h1`
  white-space: nowrap;
  color: whitesmoke;
  font-size: 200px;
`;

const FlickerSpan = styled.span`
  display: inline-block;
  animation: stretch 2s cubic-bezier(0.4, 1.4, 0.75, 0.9) infinite;
  transform-origin: center;

  ${getAnimations()}
`;

const Flicker = () => (
  <FlickerWrapper>
    <FlickerH1>
      <FlickerSpan>|</FlickerSpan>
      <FlickerSpan>|</FlickerSpan>
      <FlickerSpan>|</FlickerSpan>
      <FlickerSpan>|</FlickerSpan>
      <FlickerSpan>|</FlickerSpan>
    </FlickerH1>
  </FlickerWrapper>
);

export default Flicker;
