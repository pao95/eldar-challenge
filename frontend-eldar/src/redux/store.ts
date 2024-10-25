import { configureStore } from "@reduxjs/toolkit";
import { notificationSlice } from "./notification/notificacionSlice";
import { authSlice } from "./auth/authSlice";
import { spinnerSlice } from "./spinner/spinnerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
    spinner: spinnerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
