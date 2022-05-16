import { useReducer, useState } from 'react';
import Notes from '../components/Notes';

const initialNotes = [
  { id: Date.now(), text: 'Get cold brew please!', done: false },
];
// an array of info
const noteReducer = (notes, action) => {
  switch (action.type) {
    case 'add_note':
      return [
        { id: Date.now(), text: action.payload.text, done: false },
        ...notes,
      ];
    case 'update_note':
      return notes.map((note) => {
        if (note.id === action.payload.note.id) {
          const { done, text } = action.payload.note;
          return {
            ...note,
            done,
            text,
          };
        }
        return note;
      });
    case 'delete_note':
      return notes.filter((note) => note.id !== action.payload.id);

    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};
// function that updates our state, id is state before adding new note, text is our new ob

export default function ShoppingList() {
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'add_note', payload: { text: newNote } });
    setNewNote('');
  };
  const handleUpdateNote = (note) => {
    dispatch({ type: 'update_note', payload: { note } });
  };
  // when we call this handle function we are adding state by the type/action
  const handleDeleteNote = (id) => {
    dispatch({ type: 'delete_note', payload: { id } });
  };
  return (
    <>
      <h2>Shopping List</h2>
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          name="newNote"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Notes
              note={note}
              onUpdate={handleUpdateNote}
              onDelete={handleDeleteNote}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
// //created a to do form

// mapping through the list of todos and getting one out by its id
