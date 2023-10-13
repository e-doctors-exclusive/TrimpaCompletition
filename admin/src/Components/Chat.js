import React, { useState } from 'react';
import SideBar from './SideBar';
import '../styles/Chat.css';

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [clicked, setClicked] = useState(true);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div style={{ display: 'flex' }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          marginLeft: clicked ? '250px' : '70px',
        }}
      >
        <div className="chat-room">
          <div className="chat-room-header">
            <h2>Chat Room</h2>
          </div>
          <div className="chat-room-messages">
            <ul>
              {messages.map((message, index) => (
                <li key={index} className="chat-room-message">
                  {message}
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-room-input">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={handleMessageChange}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;