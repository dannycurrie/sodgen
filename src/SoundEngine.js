import normalize from 'normalize-to-range';
import * as R from 'ramda';
import { playSound as playSoundAction, playChord as playChordAction } from './actions';
import { sounds } from './utils/sounds';
import dataFeed from './data-feed';

const curriedNormalize = (min, max) => values => normalize(values, min, max);

/**
 * Function which generates actions to trigger sounds
 *
 * This is where the majority of the generative code will be
 */
export default (store) => {
  // we'll store all of the values coming in here
  const dataStore = [];
  // set up function to translate data to note ids
  const min = 0;
  const max = store.getState().notes.length;
  const normalizeNotes = curriedNormalize(min, max);
  const playSound = soundId => store.dispatch(playSoundAction(soundId));
  const playChord = noteIds => store.dispatch(playChordAction(noteIds));
  const triggerableSounds = R.drop(2, R.keys(sounds));

  const play = (data) => {
    console.log(data);
    if (typeof data === 'undefined') return;
    // play random sound from triggerable sounds
    const i = Math.floor(Math.random() * triggerableSounds.length);
    playSound(sounds[triggerableSounds[i]]);

    // play chord from normailised data
    dataStore.push(data);
    // take last 3 data values and create a chord from them
    const chord = R.compose(
      R.toString,
      R.map(Math.floor),
      normalizeNotes,
      R.takeLast(3)
    )(dataStore);
    playChord(chord);
  };

  const init = () => {
    dataFeed(play);
  };

  return {
    init,
  };
};
