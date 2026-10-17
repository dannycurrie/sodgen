import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  soundId: null,
};

const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    // an empty id clears the currently playing sound
    playSound(state, action) {
      state.soundId = action.payload || null;
    },
  },
});

export const { playSound } = soundSlice.actions;

export default soundSlice.reducer;
