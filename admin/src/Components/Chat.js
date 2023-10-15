import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import "../styles/Chat.css";
import io from "socket.io-client";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(""); // Rename to newMessage
  const [clicked, setClicked] = useState(true);
  const socket = io("http://localhost:1128");


  socket.on("connect_error", (error) => {
    console.error("Socket.IO connection error:", error);
  });

  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log("Received message:", msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("chat message", newMessage);
    setNewMessage(""); // Clear the input field after sending the message
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value); // Update newMessage, not messagess
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
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type your message here"
                value={newMessage}
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
