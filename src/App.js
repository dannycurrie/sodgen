import React, { Fragment } from 'react';
import styled from 'styled-components';
import Sound from './components/Sound';
// import NoteContainer from './components/NoteContainer';
import WithTrigger from './components/WithTrigger';
import { sounds } from './utils/sounds';
import Flicker from './components/Flicker';

const Background = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
  background-size: 200% 200%;
  background-image: linear-gradient(to right, #aa4b6bcc, #6b6b83cc, #3b8d99cc);
  animation: Gradient 30s ease infinite;

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

const Background2 = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
`;

const App = () => (
  <Fragment>
    <Background2>
      <WithTrigger>
        <Flicker />
      </WithTrigger>
    </Background2>
    <Background className="App">
      <Sound soundId={sounds.drone} options={{ loop: true }} play />
      <Sound soundId={sounds.synthline} options={{ loop: true }} play />
      <WithTrigger>
        <Sound soundId="" />
      </WithTrigger>
      {/* <NoteContainer /> */}
    </Background>
  </Fragment>
);

export default App;
