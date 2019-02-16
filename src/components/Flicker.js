import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import phrases from '../utils/words';

const getAnimation = (duration = 5) => `stretch ${Math.random() * duration}s cubic-bezier(0.4, 1.4, 0.75, 0.9) 2;`;

const getAnimationDelays = () => {
  let result = '';
  for (let i = 0; i < 6; i += 1) {
    const r = Math.floor(Math.random() * 6);
    result += `&:nth-of-type(${r}) {animation-delay: ${r * 0.5}s }`;
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
  background: radial-gradient(#65999933, #f4791f33);

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
  font-size: 30px;
  opacity: 0.6;
  animation: ${props => getAnimation(props.duration)};
`;

const FlickerSpan = styled.span`
  display: inline-block;
  transform-origin: center;

  ${getAnimationDelays()}
`;

const renderFlickerSpan = () => <FlickerSpan>{phrases()}</FlickerSpan>;

const Flicker = props => (
  <FlickerWrapper>
    {R.complement(R.isNil)(props.soundId) ? <FlickerH1>{renderFlickerSpan()}</FlickerH1> : null}
  </FlickerWrapper>
);

Flicker.propTypes = {
  soundId: PropTypes.string,
  duration: PropTypes.number,
};

Flicker.defaultProps = {
  soundId: null,
  duration: 2,
};

export default Flicker;