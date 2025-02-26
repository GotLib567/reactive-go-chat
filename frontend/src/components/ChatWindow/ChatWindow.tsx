import React from 'react';
import Message from "../Message/Message.tsx";
import TextField from "../TextField/TextField.tsx";
import ChatInfo from "../ChatInfo/ChatInfo.tsx";
import styles from "./styles.module.scss";

const ChatWindow:React.FC = () => {
  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <ChatInfo />
        <div className={styles["chat-field"]}>
          <div className={styles["messages-field"]}>
            <Message text={"Сообщение 1"} side={"outgoing"} />
            <Message text={"Сообщение 2"} side={"incoming"} />
          </div>
          <TextField />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;