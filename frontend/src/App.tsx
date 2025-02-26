import React, {useEffect} from 'react';
import ChatList from "./components/ChatList/ChatList.tsx";
import ChatWindow from "./components/ChatWindow/ChatWindow.tsx";
import styles from "./app.module.scss";
import {useDispatch} from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'WS_CONNECT'});
    return () => {
      dispatch({ type: 'WS_DISCONNECT' });
    };
  }, [dispatch]);

  return (
    <div className={styles.background}>
      <div className={styles.app}>
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  )
}

export default App;