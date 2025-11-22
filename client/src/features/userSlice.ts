import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

export interface SavedTrip {
  tripId: string;
  addedAt: string;
}
export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  savedTrips: SavedTrip[];
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateUser: (
      state,
      action: PayloadAction<PayloadAction<Partial<User>>>
    ) => {
      if (state.user) state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
