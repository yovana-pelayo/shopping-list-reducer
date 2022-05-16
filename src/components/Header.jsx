import { useNotes } from '../context/NotesProvider';

export default function Header() {
  const { notes } = useNotes();
  return <div>Number of items{notes.length} </div>;
}
