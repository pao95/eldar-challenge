import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  severity: "success" | "error" | "warning" | "info";
  message: string;
}

interface NotificationState {
  severity: "success" | "error" | "warning" | "info";
  show: boolean;
  message: string;
}

const initialState: NotificationState = {
  severity: "success",
  show: false,
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>
    ) => {
      state.severity = action.payload.severity;
      state.show = true;
      state.message = action.payload.message;
    },
    hideNotification: (state: NotificationState) => {
      state.show = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
