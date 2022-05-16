import { useReducer, useState } from 'react';

const initialNotes = [{ id: 0, text: 'Get cold brew please!', done: false }];

// an array of info
const noteReducer = (state, action) => {};
// function that updates our state {newNote}

export default function ShoppingList() {
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);

  const [newNote, setNewNote] = useState('');
  //   const [notes, setNotes] = useState('');
  //   //   useEffect(() => {
  //   //    const data = await getNotes();

  //   //     }
  //   //   );

  const handleAddNote = (e) => {
    e.preventDefault();
  };
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
        <button className="save-button">add</button>
      </form>
      <ul>
        {notes.map((note) => {
          <li key={note.id}>{note.text}</li>;
        })}
      </ul>
    </div>
  );
}
// //created a to do form

// mapping through the list of todos and getting one out by its id
