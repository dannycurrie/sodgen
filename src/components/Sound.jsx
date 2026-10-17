import { useEffect } from 'react';
import { getSound } from '../utils/sounds';
import playAudio from '../utils/web-audio';

// stable default so the effect is not re-run on every render
const noOptions = {};

const Sound = ({ soundId = '', options = noOptions }) => {
  useEffect(() => {
    if (!soundId) return;
    const soundURL = getSound(soundId);
    // if no sound, don't play
    if (soundURL) playAudio(soundURL, options);
  }, [soundId, options]);

  return null;
};

export default Sound;
