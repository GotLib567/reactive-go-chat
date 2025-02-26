import React, {useState} from 'react';
import styles from "./styles.module.scss";
import sendButton from "./../../assets/images/send-button.svg";
import {useDispatch} from "react-redux";

const TextField:React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    if (message.trim()) {
      dispatch({ type: 'WS_SEND_MESSAGE', payload: { message } });
      setMessage("");
    }
  }

  return (
    <div className={styles.container}>
      <textarea className={styles.textfield} placeholder={"Введите сообщение"} value={message} onChange={handleChange} ></textarea>
      <img src={sendButton} alt="send" className={styles["send-img"]} onClick={handleSend} />
    </div>
  );
};

export default TextField;