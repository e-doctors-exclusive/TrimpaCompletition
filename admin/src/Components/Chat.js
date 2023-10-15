<<<<<<< HEAD
import React, { useState } from "react";
import SideBar from "./SideBar";
import "../styles/Chat.css";

function ChatRoom() {
  const [adminMessages, setAdminMessages] = useState([]);
  const [clientMessages, setClientMessages] = useState([]);
  const [adminMessage, setAdminMessage] = useState(""); // State for admin message input
  const [clientMessage, setClientMessage] = useState(""); // State for client message input
  const [clicked, setClicked] = useState(true);

  const handleAdminMessageChange = (e) => {
    setAdminMessage(e.target.value);
  };

  const handleClientMessageChange = (e) => {
    setClientMessage(e.target.value);
  };

  const handleAdminMessageSubmit = (e) => {
    e.preventDefault();
    setAdminMessages([...adminMessages, adminMessage]);
    setAdminMessage(""); // Clear the input
  };

  const handleClientMessageSubmit = (e) => {
    e.preventDefault();
    setClientMessages([...clientMessages, clientMessage]);
    setClientMessage(""); // Clear the input
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar setClicked={setClicked} clicked={clicked} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
          marginLeft: clicked ? "250px" : "70px",
        }}
      >
        <div className="chat-room">
          <div className="chat-room-header">
            <h2>Chat Room</h2>
          </div>
          <div className="chat_box">
            <div className="admin_chat">
              <ul>
                {adminMessages.map((message, index) => (
                  <li key={index} className="admin-chat-message">
                    {message}
                  </li>
                ))}
              </ul>
            </div>
            <div className="client_chat">
              <ul>
                {clientMessages.map((message, index) => (
                  <li key={index} className="client-chat-message">
                    {message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="chat-room-input">
            <form onSubmit={handleAdminMessageSubmit}>
              <input
                type="text"
                placeholder="Type your admin message here"
                value={adminMessage}
                onChange={handleAdminMessageChange}
              />
              <button type="submit">Send Admin</button>
            </form>
          </div>
        </div>
=======
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:3000'); // Connect to the backend server

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages([...messages, data]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
>>>>>>> 667c33fbe4d86f7e1e95559bda511f65111a1a7b
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

<<<<<<< HEAD
export default ChatRoom;
=======
export default App;
>>>>>>> 667c33fbe4d86f7e1e95559bda511f65111a1a7b
