import { PLAY_SOUND } from '../actions';

const initialState = [
    { id: '1', play: false }
];

const playSound = id => state => state.map(s => s.id === id ? { ...s, play: true } : s);

export default (state = initialState, action) => {
    switch(action.type) {
        case PLAY_SOUND:
            return playSound(action.id)(state);
        default:
            return state;
    }
}