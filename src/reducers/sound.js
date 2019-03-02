import * as R from 'ramda';
import { PLAY_SOUND, SOUND_LOADED } from '../actions';
import { sounds } from '../utils/sounds';

const initialState = {
  soundId: null,
  baseSounds: [
    {
      id: sounds.drone,
      loaded: false,
    },
    {
      id: sounds.synthline,
      loaded: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SOUND:
      if (action.id) {
        return R.assoc('soundId', action.id, state);
      }
      return R.assoc('soundId', null, state);
    case SOUND_LOADED:
      return R.assoc(
        'baseSounds',
        R.map(R.when(s => s.id === action.id, R.assoc('loaded', true)), state.baseSounds),
        state
      );
    default:
      return state;
  }
};
