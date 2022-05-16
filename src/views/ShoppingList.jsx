import { useState } from 'react';

export default function ShoppingList() {
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h2>Add to your shopping list below</h2>
      <form className="new-todo" onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="save-button">add</button>
      </form>
    </div>
  );
}
//created a to do form
