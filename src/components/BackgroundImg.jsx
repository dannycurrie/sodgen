import styled, { css, keyframes } from 'styled-components';

// keyframes are generated per instance so each layer drifts on its own path -
// a plain `@keyframes` block would share one global name between all layers
const drift = ({ $startX, $startY, $endX, $endY, $baseOpacity }) => keyframes`
  0% {
    background-position: ${$startX} ${$startY};
    opacity: ${$baseOpacity};
    background-size: 250% 250%;
  }
  50% {
    background-position: ${$endX} ${$endY};
    opacity: ${$baseOpacity - 0.2};
    background-size: 275% 275%;
  }
  100% {
    background-position: ${$startX} ${$startY};
    opacity: ${$baseOpacity};
    background-size: 245% 245%;
  }
`;

const Layer = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url(${props.$url})`};
  background-size: 200% 200%;
  background-repeat: repeat;

  animation: ${(props) => css`
    ${drift(props)} ${props.$duration} ease infinite
  `};
`;

const BackgroundImg = ({ url, startX, startY, endX, endY, duration, baseOpacity }) => (
  <Layer
    $url={url}
    $startX={startX}
    $startY={startY}
    $endX={endX}
    $endY={endY}
    $duration={duration}
    $baseOpacity={baseOpacity}
  />
);

export default BackgroundImg;
