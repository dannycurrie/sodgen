export const PLAY_SOUND = 'PLAY_SOUND';
export const PLAY_SOUNDS = 'PLAY_SOUNDS';
export const playSound = id => ({ type: PLAY_SOUND, id });
export const playSounds = ids => ({ type: PLAY_SOUNDS, ids });
