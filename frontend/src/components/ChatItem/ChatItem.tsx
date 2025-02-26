import React from 'react';
import styles from "./styles.module.scss";

interface ChatItemProps {
  title: string;
}

const ChatItem:React.FC<ChatItemProps> = ({title}) => {
  return (
    <div className={styles.container}>
      <span>{title}</span>
    </div>
  );
};

export default ChatItem;