import styled, { css, keyframes } from 'styled-components';
import phrases from '../utils/words';
import colours from '../utils/colours';

const stretch = keyframes`
  5% {
    transform: scaleX(5000);
    opacity: 0.1;
  }
  15% {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const getAnimation = (duration = 5) => css`
  ${stretch} ${Math.random() * duration}s cubic-bezier(0.4, 1.4, 0.75, 0.9) 2
`;

const getAnimationDelays = () => {
  let result = '';
  for (let i = 0; i < 6; i += 1) {
    const r = Math.floor(Math.random() * 6);
    const duration = r >= 2 ? r : 2;
    result += `&:nth-of-type(${r}) {animation-delay: ${duration}s }`;
  }
  return result;
};

const FlickerWrapper = styled.div`
  font:
    300 50px/1 Alegreya Sans,
    monospace;
  height: 100%;
  overflow: hidden;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(${colours.themeTwo}33, ${colours.themeOne}33);
`;

const FlickerH1 = styled.h1`
  white-space: nowrap;
  color: ${colours.textColour};
  font-size: 30px;
  opacity: 0.6;
  animation: ${(props) => getAnimation(props.$duration)};
`;

const FlickerSpan = styled.span`
  display: inline-block;
  transform-origin: center;

  ${getAnimationDelays()}
`;

const Flicker = ({ soundId = null, duration }) => (
  <FlickerWrapper>
    {soundId != null ? (
      <FlickerH1 $duration={duration}>
        <FlickerSpan>{phrases()}</FlickerSpan>
      </FlickerH1>
    ) : null}
  </FlickerWrapper>
);

export default Flicker;
