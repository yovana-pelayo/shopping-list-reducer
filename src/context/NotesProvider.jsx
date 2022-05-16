import { createContext } from 'react';

const NotesContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteRe);
};
