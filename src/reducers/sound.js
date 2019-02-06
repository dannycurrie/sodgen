import * as R from 'ramda';
import { PLAY_SOUND } from '../actions';

const initialState = {
  soundId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SOUND:
      return R.assoc('soundId', action.id, state);
    default:
      return state;
  }
};
