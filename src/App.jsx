import Header from './components/Header';
import ShoppingList from './views/ShoppingList';
import { NoteProvider } from './context/NotesProvider';

export default function App() {
  return (
    <>
      <NoteProvider>
        <Header />
        <ShoppingList />
      </NoteProvider>
    </>
  );
}
