import React from 'react';
import styled from 'styled-components';

const FlickerWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(#1a1a1a, #000);
`;

const FlickerH1 = styled.h1`
  font: monospace;
  white-space: nowrap;
  color: whitesmoke;
`;

const FlickerSpan = styled.span`
  display: inline-block;
  animation: stretch ${Math.random()}s cubic-bezier(0.4, 1.4, 0.75, 0.9) infinite;
  transform-origin: center;

  @keyframes stretch {
    5% {
      transform: scaleX(${Math.random() * 5000});
      opacity: 0.1;
    }
    15% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
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
