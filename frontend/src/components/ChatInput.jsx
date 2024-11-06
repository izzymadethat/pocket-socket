import { useState } from "react";
import * as styles from "../styles/ChatInput.module.css";

const ChatInput = ({ socket }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("incoming_message", message);
    setMessage("");
  };

  return (
    <div className={styles.chatInput}>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message here..."
        type="text"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
export default ChatInput;
