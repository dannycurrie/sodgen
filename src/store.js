import { configureStore } from '@reduxjs/toolkit';
import notes from './reducers/notes';
import sound from './reducers/sound';

export default configureStore({
  reducer: { notes, sound },
});
