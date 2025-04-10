import React, { useState, useEffect, useRef } from "react";
import { ChatsData } from '../../../data/chats'
import "./right-fold.css";
function RightFold({ selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      setMessages(ChatsData[selectedChat.id] || []);
    }
  }, [selectedChat]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = () => {
    if (newMsg.trim() !== "") {
      const updated = [...messages, { from: "me", text: newMsg }];
      setMessages(updated);
      setNewMsg("");
    }
  };

  if (!selectedChat) {
    return <div className="chat-placeholder">Select a chat to start conversation</div>;
  }

  return (
    <div className="chat-window">
      <div className="chat-header">{selectedChat.name}</div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.from === "me" ? "sender" : "receiver"}`}>
            <span>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="chat-input-section">
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button className="chat-send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default RightFold;
