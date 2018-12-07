import sound from './sound';
import { playSounds } from '../actions';

describe('sound reducer', () => {
  test('plays a sound', () => {
    const action = playSounds(['0']);
    const newState = sound(undefined, action);
    console.log(newState);
    expect(newState[0].play).toBe(true);
    expect(newState[1].play).toBe(false);
  });
});
