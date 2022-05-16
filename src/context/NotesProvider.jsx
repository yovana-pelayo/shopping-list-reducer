import { useReducer, useContext, createContext } from 'react';

const initialNotes = [
  { id: Date.now(), text: 'Get cold brew please!', done: false },
];
// an array of info
const noteReducer = (state, action) => {
  switch (action.type) {
    case 'add_note':
      return [
        { id: Date.now(), text: action.payload.text, done: false },
        ...state,
      ];
    case 'update_note':
      return state.map((note) => {
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
const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, initialNotes);

  const handleAddNote = (text) => {
    dispatch({ type: 'add_note', payload: { text } });
  };

  const handleUpdateNote = (note) => {
    dispatch({ type: 'update_note', payload: { note } });
  };
  // when we call this handle function we are adding state by the type/action
  const handleDeleteNote = (id) => {
    dispatch({ type: 'delete_note', payload: { id } });
  };
  return (
    <NoteContext.Provider
      value={{ notes, handleAddNote, handleUpdateNote, handleDeleteNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
export const useNotes = () => {
  const context = useContext(NoteContext);

  if (context === undefined)
    throw new Error('useNotes can not be called outside of a Note Provider');
  return context;
};
