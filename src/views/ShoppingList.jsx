import { useState } from 'react';
import Notes from '../components/Notes';
import { useNotes } from '../context/NotesProvider';

// function that updates our state, id is state before adding new note, text is our new ob

export default function ShoppingList() {
  const [newNote, setNewNote] = useState('');
  const { notes, handleAddNote, handleUpdateNote, handleDeleteNote } =
    useNotes();

  // pulling in state from context

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNote(newNote);
    setNewNote('');
  };
  return (
    <>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
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
