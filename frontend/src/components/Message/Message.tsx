import React from 'react';
import styles from "./styles.module.scss";

interface MessageProps {
  text: string;
  side: "outgoing" | "incoming";
}

const Message:React.FC<MessageProps> = ({text, side}) => {
  return (
    <div className={`${styles.block} ${side === "outgoing" ? styles.outgoing : styles.incoming}`}>
      <div className={`${styles.container} ${side === "outgoing" ? styles.outgoing : styles.incoming}`}>
        {text}
      </div>
    </div>
  );
};

export default Message;