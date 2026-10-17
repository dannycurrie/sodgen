import { describe, it, expect } from 'vitest';
import reducer, { playNote } from './notes';

const playing = (state) => state.filter((note) => note.play).map((note) => note.id);

describe('notes reducer', () => {
  it('starts with nothing playing', () => {
    const state = reducer(undefined, { type: 'init' });
    expect(playing(state)).toEqual([]);
  });

  it('plays a single note id', () => {
    const state = reducer(undefined, playNote('3'));
    expect(playing(state)).toEqual(['3']);
  });

  it('plays several note ids', () => {
    const state = reducer(undefined, playNote(['1', '4']));
    expect(playing(state)).toEqual(['1', '4']);
  });

  it('stops notes that are no longer playing', () => {
    const first = reducer(undefined, playNote('3'));
    const second = reducer(first, playNote('5'));
    expect(playing(second)).toEqual(['5']);
  });

  it('keeps note values intact', () => {
    const state = reducer(undefined, playNote('1'));
    expect(state.find((note) => note.id === '1').value).toBe('E4');
  });
});
