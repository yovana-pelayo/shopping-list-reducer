import { useState } from 'react';
import { useEffect } from 'react';
import { getNotes } from '../services/notes';

export default function Notes() {
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNotes();
      setNote(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>loading...</div>;
  return (
    <>
      <form>
        <input
          type="text"
          value={note}
          onchange={(e) => setNote(e.target.value)}
        />
        <button aria-label="save">save</button>
      </form>
    </>
  );
}
