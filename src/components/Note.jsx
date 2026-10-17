import { useEffect } from 'react';
import { getSynth, getChord } from '../utils/notes';

// the note object is replaced on every play action, so the effect re-runs
// each time this note is triggered - even if it is the same note twice
const Note = ({ note }) => {
  useEffect(() => {
    if (!note.play) return;
    getSynth().triggerAttackRelease(getChord(note.value), '2n');
  }, [note]);

  return null;
};

export default Note;
