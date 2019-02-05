import React, { useEffect } from 'react';
import Sound from './components/Sound';
import { sounds } from './utils/sounds';

const App = () => {
  useEffect(() => {});

  return (
    <div className="App">
      <Sound soundId={sounds.drone} />
      <Sound soundId={sounds.synthline} />
    </div>
  );
};

export default App;
