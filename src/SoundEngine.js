import { playSounds as playSoundsAction } from './actions';

/**
 * Function which generates actions to trigger sounds
 *
 * This is where the majority of the generative code will be
 */
export default (store) => {
  const playSounds = soundIds => store.dispatch(playSoundsAction(soundIds));
  const loop = () => {
    const id1 = () => Math.floor(Math.random() * store.getState().length).toString();
    const id2 = () => Math.floor(Math.random() * store.getState().length + 2).toString();
    const id3 = () => Math.floor(Math.random() * store.getState().length + 2).toString();
    const timeout = Math.random() * 2000;
    const chord = [id1(), id2(), id3()];

    playSounds(chord);
    setTimeout(loop, timeout);
  };

  const init = () => {
    loop();
  };

  return {
    init,
  };
};
