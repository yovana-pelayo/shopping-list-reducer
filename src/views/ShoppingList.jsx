import { useReducer, useState } from 'react';

const initialNotes = [{ id: 0, text: 'Get cold brew please!', done: false }];

// an array of info
const noteReducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
};
// function that updates our state {newNote}

export default function ShoppingList() {
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);

  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    dispatch({ type: 'add_note', payload: { text: newNote } });
  };

  // when we call this handle function we are adding state by the type/action
  return (
    <div>
      <h2>Shopping List</h2>
      <form className="new-todo" onSubmit={handleAddNote}>
        <input
          type="text"
          name="newNote"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="add-button">add</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  );
}
// //created a to do form

// mapping through the list of todos and getting one out by its id
