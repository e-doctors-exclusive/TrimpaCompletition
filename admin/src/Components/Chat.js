import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:1129', { transports: ['websocket', 'polling'] });

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('getHistory');

    socket.on('message', (data) => {
      setMessages(data);
    });
  }, []);

  useEffect(() => {
    socket.on('history', (data) => {
      setMessages(data);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
