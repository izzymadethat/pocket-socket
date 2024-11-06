import { useState } from "react";
import useWebSocket from "./hooks/useWebSocket";
import * as styles from "./styles/App.module.css";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([]);
  const socket = useWebSocket(import.meta.env.VITE_SERVER_URL, (data) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  });

  return (
    <div className={styles.app}>
      <h1>Pocket Socket</h1>
      <ChatBox messages={messages} socket={socket} />
      <ChatInput socket={socket} />
    </div>
  );
}

export default App;
