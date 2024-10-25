import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";

interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  user: User | null;
}

const initialState: AuthState = {
  status: "checking",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state: AuthState) => {
      state.status = "checking";
      state.user = null;
    },
    onLogin: (state: AuthState, action: PayloadAction<User>) => {
      state.status = "authenticated";
      state.user = action.payload;
    },
    onLogout: (state: AuthState) => {
      state.status = "not-authenticated";
      state.user = null;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;

export default authSlice.reducer;
