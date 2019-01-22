import normalize from 'normalize-to-range';
import * as R from 'ramda';
import { playSounds as playSoundsAction } from './actions';
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
  const max = store.getState().length;
  const normalizeNotes = curriedNormalize(min, max);

  const playSounds = soundIds => store.dispatch(playSoundsAction(soundIds));

  const play = (data) => {
    if (typeof data === 'undefined') return;
    dataStore.push(data);
    // take last 3 data values and create a chord from them
    const chord = R.compose(
      R.toString,
      R.map(Math.floor),
      normalizeNotes,
      R.takeLast(3),
    )(dataStore);
    playSounds(chord);
  };

  const init = () => {
    dataFeed(play);
  };

  return {
    init,
  };
};
