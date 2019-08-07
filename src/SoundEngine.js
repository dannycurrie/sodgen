import normalize from 'normalize-to-range';
import * as R from 'ramda';
import { playSound as playSoundAction, playNote as playNoteAction } from './actions';
import { sounds } from './utils/sounds';
import dataFeed from './data-feed';

const curriedNormalize = (min, max) => values => normalize(values, min, max);
// identfies the value we want from the data
const dataLens = R.lensProp('price');
const formatData = R.view(dataLens);

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
  const playNotes = noteIds => store.dispatch(playNoteAction(noteIds));
  const triggerableSounds = R.drop(2, R.keys(sounds));

  const play = (data) => {
    console.log(data);
    if (typeof data === 'undefined') return;
    // play chord from normailised data
    dataStore.push(data);

    // randomly play either trigger sound or notes
    if (Math.random() > 0.4) {
      // play random sound from triggerable sounds
      const i = Math.floor(Math.random() * triggerableSounds.length);
      playSound(sounds[triggerableSounds[i]]);
    } else {
      // take last 5 data values normalise to get a note id
      playNotes(
        R.compose(
          R.toString,
          R.head,
          R.map(Math.floor),
          normalizeNotes,
          R.takeLast(5)
        )(dataStore)
      );
    }
    // clear sound after random duration
    const duration = R.pipe(
      () => Math.random() * 3000,
      R.ifElse(R.gte(1000), () => 1000, R.identity)
    )();

    setTimeout(() => playSound(''), duration);
  };

  const init = () => {
    dataFeed().subscribe(
      R.pipe(
        formatData,
        play
      )
    );
  };

  return {
    init,
  };
};
