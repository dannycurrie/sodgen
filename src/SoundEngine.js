import { playSounds as playSoundsAction } from './actions';
import dataFeed from './data-feed';

/**
 * Function which generates actions to trigger sounds
 *
 * This is where the majority of the generative code will be
 */
export default (store) => {
  const playSounds = soundIds => store.dispatch(playSoundsAction(soundIds));
  const play = (data) => {
    console.log(data);
    const id1 = () => Math.floor(Math.random() * store.getState().length).toString();
    const id2 = () => Math.floor(Math.random() * store.getState().length + 2).toString();
    const id3 = () => Math.floor(Math.random() * store.getState().length + 2).toString();
    const chord = [id1(), id2(), id3()];
    playSounds(chord);
  };

  const init = () => {
    dataFeed(play);
  };

  return {
    init,
  };
};
