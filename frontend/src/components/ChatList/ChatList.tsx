import React from 'react';
import styles from "./styles.module.scss";
import ChatItem from "../ChatItem/ChatItem.tsx";

const ChatList:React.FC = () => {
  return (
    <div className={styles.container}>
      <ChatItem title={"Chat Name 1"} />
      <ChatItem title={"Chat Name 2"} />
      <ChatItem title={"Chat Name 3"} />
    </div>
  );
};

export default ChatList;