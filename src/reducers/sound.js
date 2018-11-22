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

const playSounds = ids => state => state.map(
  s => (ids.includes(s.id)
    ? { ...s, play: true }
    : { ...s, play: false }),
);

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SOUNDS:
      return playSounds(action.ids)(state);
    default:
      return state;
  }
};
