import { useState } from 'react';

export default function Notes({ note, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  let content;

  // content is what is being rendered
  if (isEdit) {
    content = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEdit(false);
        }}
      >
        <input
          value={note.text}
          aria-label="edit"
          onChange={(e) => {
            onUpdate({ ...note, text: e.target.value });
          }}
        />
        <button type="submit" aria-label="save changes">
          save
        </button>
      </form>
    );
    // onchange is calling the form and editing
  } else {
    content = (
      <>
        <p style={{ textDecoration: note.done ? 'line-through' : null }}>
          {note.text}
        </p>
        <button
          type="button"
          onClick={() => setIsEdit(true)}
          aria-label={`Edit ${note.text}`}
        >
          edit
        </button>
      </>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input
        type="checkbox"
        checked={note.done}
        onchange={(e) => {
          onUpdate({ ...note, done: e.target.checked });
        }}
      />
      {content}
      <button type="button" onClick={() => onDelete(note.text)}>
        delete
      </button>
    </div>
  );
}
