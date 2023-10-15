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
      </div>
    </div>
  );
}

export default ChatRoom;
