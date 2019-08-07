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
  const randomIndex = R.pipe(
    () => Math.random() * triggerableSounds.length,
    Math.floor
  );
  const randomSound = () => sounds[triggerableSounds[randomIndex()]];
  const getNote = R.pipe(
    R.takeLast(5),
    normalizeNotes,
    R.map(Math.floor),
    R.head,
    R.toString
  );

  const play = (data) => {
    console.log(data);
    if (typeof data === 'undefined') return;
    dataStore.push(data);

    // randomly play either trigger sound or notes
    if (Math.random() > 0.4) {
      playSound(randomSound());
    } else {
      playNotes(getNote(dataStore));
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
