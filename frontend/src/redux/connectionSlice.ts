// connectionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConnectionState {
  isConnected: boolean;
  error: string | null;
}

const initialState: ConnectionState = {
  isConnected: false,
  error: null,
};

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    wsOpen(state) {
      state.isConnected = true;
      state.error = null;
    },
    wsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isConnected = false;
    },
    wsClosed(state) {
      state.isConnected = false;
    },
  },
});

export const { wsOpen, wsError, wsClosed } = connectionSlice.actions;
export default connectionSlice.reducer;
