import { createSlice } from '@reduxjs/toolkit';

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

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // accepts a single note id, or any iterable of note ids
    playNote(state, action) {
      const ids = new Set(Array.from(action.payload ?? []));
      state.forEach((note) => {
        note.play = ids.has(note.id);
      });
    },
  },
});

export const { playNote } = notesSlice.actions;

export default notesSlice.reducer;
