import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const { data, error } = await supabase.from('messages').select('*');
    if (error) console.error(error);
    else setMessages(data);
  }

  async function addMessage() {
    if (!newMsg) return;
    const { error } = await supabase.from('messages').insert([{ text: newMsg }]);
    if (error) console.error(error);
    else {
      setNewMsg('');
      fetchMessages();
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Messages</h1>
      <ul>
        {messages.map(m => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>

      <input
        value={newMsg}
        onChange={e => setNewMsg(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={addMessage}>Add</button>
    </div>
  );
}

export default App;