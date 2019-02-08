import React, { useEffect } from 'react';
import Sound from './components/Sound';
import SoundContainer from './components/SoundContainer';
import WithTrigger from './components/WithTrigger';
import { sounds } from './utils/sounds';

const App = () => {
  useEffect(() => {});

  return (
    <div className="App">
      <Sound soundId={sounds.drone} options={{ loop: true }} play />
      <Sound soundId={sounds.synthline} options={{ loop: true }} play />
      <WithTrigger>
        <Sound soundId="" />
      </WithTrigger>
      <SoundContainer />
    </div>
  );
};

export default App;
