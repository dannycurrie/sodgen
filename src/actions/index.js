export const PLAY_SOUND = 'PLAY_SOUND';
export const playSound = id => ({ type: PLAY_SOUND, id });
export const PLAY_CHORD = 'PLAY_CHORD';
export const playChord = ids => ({ type: PLAY_CHORD, ids });
