import { useSelector } from 'react-redux';
import Note from './Note';

const NoteContainer = () => {
  const notes = useSelector((state) => state.notes);

  return notes.map((note) => <Note key={note.id} note={note} />);
};

export default NoteContainer;
