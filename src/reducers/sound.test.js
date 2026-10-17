import { describe, it, expect } from 'vitest';
import reducer, { playSound } from './sound';

describe('sound reducer', () => {
  it('starts with no sound', () => {
    expect(reducer(undefined, { type: 'init' })).toEqual({ soundId: null });
  });

  it('sets the sound being played', () => {
    expect(reducer(undefined, playSound('l_bell_3'))).toEqual({ soundId: 'l_bell_3' });
  });

  it('clears the sound when given an empty id', () => {
    const state = reducer(undefined, playSound('l_bell_3'));
    expect(reducer(state, playSound(''))).toEqual({ soundId: null });
  });
});
