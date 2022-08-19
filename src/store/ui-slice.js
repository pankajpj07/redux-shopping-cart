import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      const { type, message, open } = action.payload;
      state.notification = { message, type, open };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
