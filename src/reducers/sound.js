import { PLAY_SOUNDS } from '../actions';

const initialState = [
  // define the notes we want to play here
  { id: '0', play: false, note: 'C2' },
  { id: '1', play: false, note: 'C4' },
  { id: '2', play: false, note: 'D6' },
  { id: '3', play: false, note: 'E5' },
  { id: '4', play: false, note: 'F6' },
  { id: '5', play: false, note: 'C3' },
  { id: '6', play: false, note: 'B4' },
  { id: '7', play: false, note: 'G1' },
  { id: '8', play: false, note: 'B2' },
  { id: '9', play: false, note: 'C2' },
  { id: '10', play: false, note: 'C4' },
  { id: '11', play: false, note: 'B5' },
  { id: '12', play: false, note: 'C3' },
  { id: '13', play: false, note: 'B4' },
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
