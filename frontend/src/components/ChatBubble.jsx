import * as styles from "../styles/ChatBubble.module.css";

const ChatBubble = ({ message, socketId }) => {
  const isSender = message.socketId === socketId;

  return (
    <div className={styles.messageContainer}>
      <p className={isSender ? styles.senderUsername : styles.guestUsername}>
        {isSender ? "You" : message.socketId}
      </p>
      <div
        className={`${isSender ? styles.senderMessage : styles.guestMessage} ${
          styles.message
        }`}
      >
        {message.data}
      </div>
    </div>
  );
};
export default ChatBubble;
