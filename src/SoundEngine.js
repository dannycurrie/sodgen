import * as R from 'ramda';
import { playSound as playSoundAction } from './actions';
import { sounds } from './utils/sounds';
import dataFeed from './data-feed';

/**
 * Function which generates actions to trigger sounds
 *
 * This is where the majority of the generative code will be
 */
export default (store) => {
  const playSound = soundId => store.dispatch(playSoundAction(soundId));
  const triggerableSounds = R.drop(2, R.keys(sounds));

  const play = (data) => {
    console.log(data);
    if (typeof data === 'undefined') return;
    const i = Math.floor(Math.random() * triggerableSounds.length);
    playSound(sounds[triggerableSounds[i]]);
  };

  const init = () => {
    dataFeed(play);
  };

  return {
    init,
  };
};
