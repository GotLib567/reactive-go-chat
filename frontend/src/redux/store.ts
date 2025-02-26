import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice.ts';
import connectionReducer from './connectionSlice.ts';
import websocketMiddleware from './websocketMiddleware';

const url = 'ws://localhost:8080/ws';

const store = configureStore({
  reducer: {
    chatReducer,
    connectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware(url)),
})

export default store;