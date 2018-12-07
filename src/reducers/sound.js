import {
  equals, any, lensProp, assoc, complement,
} from 'ramda';
import { PLAY_SOUNDS } from '../actions';

const initialState = [
  // define the notes we want to play here
  { id: '0', play: false, note: 'C2' },
  { id: '1', play: false, note: 'C4' },
  { id: '2', play: false, note: 'D6' },
  { id: '3', play: false, note: 'E2' },
  { id: '4', play: false, note: 'B6' },
  { id: '5', play: false, note: 'C3' },
  { id: '6', play: false, note: 'B3' },
  { id: '7', play: false, note: 'G1' },
  { id: '8', play: false, note: 'G6' },
];

const idMatch = ({ id }) => any(equals(id));
const playTrue = s => assoc('play', true, s);
const playFalse = s => assoc('play', false, s);

const playSounds = ids => state => state.map(s => (idMatch(s)(ids) ? playTrue(s) : playFalse(s)));

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SOUNDS:
      return playSounds(action.ids)(state);
    default:
      return state;
  }
};
