import ChatBubble from "./ChatBubble";
import * as styles from "../styles/ChatBox.module.css";

const ChatBox = ({ messages, socket }) => {
  return (
    <div className={styles.chatBox}>
      {messages.map((message, i) => (
        <ChatBubble key={i} message={message} socketId={socket.socketId} />
      ))}
    </div>
  );
};
export default ChatBox;
