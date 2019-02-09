import React, { useEffect } from 'react';
import styled from 'styled-components';
import Sound from './components/Sound';
import SoundContainer from './components/SoundContainer';
import WithTrigger from './components/WithTrigger';
import { sounds } from './utils/sounds';

const Background = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
  background-size: 200% 200%;
  background-image: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);
  animation: Gradient 15s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const App = () => {
  useEffect(() => {});

  return (
    <Background className="App">
      <Sound soundId={sounds.drone} options={{ loop: true }} play />
      <Sound soundId={sounds.synthline} options={{ loop: true }} play />
      <WithTrigger>
        <Sound soundId="" />
      </WithTrigger>
      <SoundContainer />
    </Background>
  );
};

export default App;
