import React from 'react';
import styles from "./styles.module.scss";

const ChatInfo:React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chat Name</h2>
    </div>
  );
};

export default ChatInfo;