import { equals, any, assoc } from 'ramda';
import { PLAY_CHORD } from '../actions';

const initialState = [
  // define the notes we want to play here
  { id: '0', play: false, value: 'E2' },
  { id: '1', play: false, value: 'E4' },
  { id: '2', play: false, value: 'C#4' },
  { id: '3', play: false, value: 'E2' },
  { id: '4', play: false, value: 'A6' },
  { id: '5', play: false, value: 'F#3' },
  { id: '6', play: false, value: 'B3' },
  { id: '7', play: false, value: 'G#1' },
  { id: '8', play: false, value: 'E6' },
];

const idMatch = ({ id }) => any(equals(id));
const playTrue = s => assoc('play', true, s);
const playFalse = s => assoc('play', false, s);

const playNotes = ids => state => state.map(s => (idMatch(s)(ids) ? playTrue(s) : playFalse(s)));

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_CHORD:
      return playNotes(action.ids)(state);
    default:
      return state;
  }
};
