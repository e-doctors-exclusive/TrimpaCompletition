import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import '../styles/Chat.css';
import { io } from 'socket.io-client';

const users = [
  { id: 1, name: 'John', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane', email: 'jane@example.com', phone: '234-567-8901' },
  { id: 3, name: 'Bob', email: 'bob@example.com', phone: '345-678-9012' },
];

const Chat = () => {
  const [clicked, setClicked] = useState(true);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const socket = io('http://localhost:3000');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleSendMessage = () => {
    socket.emit('message', { text: message, username });
    setMessage('');
  };

  const handleUsernameChange = (e) => {
    const selectedUser = users.find((user) => user.name === e.target.value);
    setUsername(selectedUser.name);
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
        <div class="container">
          <div class="row clearfix">
            <div class="col-lg-12">
              <div class="card chat-app">
                <div class="chat">
                  <div class="chat-header clearfix">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="chat-about">
                          <h6 class="m-b-0">Chat Room</h6>
                        </div>
                      </div>
                      <div class="col-lg-6 hidden-sm text-right">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Select your username"
                          list="users"
                          onChange={handleUsernameChange}
                        />
                        <datalist id="users">
                          {users.map((user) => (
                            <option value={user.name} key={user.id} />
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>
                  <div class="chat-history">
                    <ul class="m-b-0">
                      {messages.map((message, index) => (
                        <li
                          key={index}
                          class={`clearfix ${
                            message.username === username ? 'self' : ''
                          }`}
                        >
                          <div class="message-data">
                            <span class="message-data-name">
                              {message.username}
                            </span>
                            <span class="message-data-time">
                              {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <div class="message my-message">
                            {message.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="fa fa-send"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter text here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button
                        class="btn btn-primary"
                        onClick={handleSendMessage}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;